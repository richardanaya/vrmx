import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MetaverseInput } from "./mv-input";
import { getWorld } from "./world";

@customElement("mv-form")
export class MetaverseForm extends LitElement {
  @property({ type: String, attribute: "action" })
  action = "";

  @property({ type: String, attribute: "method" })
  method = "GET";

  @property({ type: String, attribute: "target" })
  target = "";

  @property({ type: String, attribute: "timeout" })
  timeout = "";

  @property({ type: String, attribute: "timer" })
  timer = "";

  inputs: MetaverseInput[] = [];

  timerHandle: number | undefined;

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    if (this.timeout !== "") {
      this.timerHandle = window.setTimeout(() => {
        this.submit();
      }, parseInt(this.timeout));
    } else if (this.timer !== "") {
      this.timerHandle = window.setInterval(() => {
        this.submit();
      }, parseInt(this.timer));
    }
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.timerHandle) {
      if (this.timeout !== "") {
        window.clearTimeout(this.timerHandle);
      } else if (this.timer !== "") {
        window.clearInterval(this.timerHandle);
      }
    }
  }

  render() {
    return html``;
  }

  registerInput(input: MetaverseInput) {
    this.inputs.push(input);
  }

  async submit(
    intersection?: THREE.Intersection,
    submitname?: string,
    submitValue?: string
  ) {
    const nameToValue = this.inputs.reduce((acc, input) => {
      if (input.name === "") return acc;
      acc[input.name] = input.value;
      return acc;
    }, {} as any);
    getWorld().addWorldInfoToForm(nameToValue);

    if (submitname && submitValue) {
      nameToValue[submitname] = submitValue;
    }

    // add interaction info
    if (intersection) {
      const { face, faceIndex, distance, normal, uv, point } = intersection;
      if (face) {
        nameToValue[
          "mv-intersection-material-index"
        ] = `${face?.materialIndex}`;
      }
      if (faceIndex !== undefined) {
        nameToValue["mv-intersection-face-index"] = `${faceIndex}`;
      }
      if (distance !== undefined) {
        nameToValue["mv-intersection-distance"] = `${distance}`;
      }
      if (normal) {
        nameToValue[
          "mv-intersection-normal"
        ] = `${normal.x},${normal.y},${normal.z}`;
      }
      if (uv) {
        nameToValue["mv-intersection-uv"] = `${uv.x},${uv.y}`;
      }
      if (point) {
        nameToValue["mv-intersection-pos"] = `${point.x},${point.y},${point.z}`;
      }
    }

    if (this.target === "") {
      // create a new invisible form and submit it
      const form = document.createElement("form");
      form.style.display = "none";
      form.method = this.method;
      form.action = this.action;
      // set submit value
      for (const name in nameToValue) {
        const value = nameToValue[name];
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
    } else {
      const formData = new FormData();
      for (const name in nameToValue) {
        const value = nameToValue[name];
        formData.append(name, value);
      }

      let url = this.action;
      let body = undefined;
      if (this.method === "POST") {
        body = formData;
      } else {
        url = url + "?" + new URLSearchParams(formData as any).toString();
      }
      const r = await fetch(url, {
        method: this.method,
        body,
      });
      const text = await r.text();
      const target = document.body.querySelector("#" + this.target);
      if (target) {
        target.innerHTML = text;
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-form": MetaverseForm;
  }
}
