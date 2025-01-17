import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BoxGeometry, Mesh, MeshStandardMaterial, Object3D } from "three";
import { findParent, getParentSpace, isInHudSpace } from "./utils";
import { MetaverseForm } from "./mv-form";
import { getWorld } from "./world";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

@customElement("mv-input")
export class MetaverseInput extends LitElement {
  @property({ type: String, attribute: "src" })
  src = "";

  @property({ type: String, attribute: "position" })
  positon = "0,0,0";

  @property({ type: String, attribute: "rotation" })
  rotation = "0,0,0";

  @property({ type: String, attribute: "scale" })
  scale = "1,1,1";

  @property({ type: Boolean })
  isLoaded = false;

  @property({ type: Object3D })
  space = new Object3D();

  @property({ type: String, attribute: "type" })
  type = "submit";

  @property({ type: String, attribute: "name" })
  name = "";

  @property({ type: String, attribute: "value" })
  value = "";

  unregisters: (() => void)[] = [];

  parentSpace: Object3D | undefined;

  createRenderRoot() {
    return this;
  }

  // connected
  connectedCallback() {
    super.connectedCallback();
    const { space } = this;

    this.parentSpace = getParentSpace(this);
    const isHud = isInHudSpace(this);
    const world = getWorld();
    const registerFn = isHud
      ? getWorld().registerInteractiveHudObject.bind(world)
      : getWorld().registerInteractiveObject.bind(world);

    const [x, y, z] = this.positon.split(",").map((s) => parseFloat(s));
    const [rx, ry, rz] = this.rotation.split(",").map((s) => parseFloat(s));
    const [sx, sy, sz] = this.scale.split(",").map((s) => parseFloat(s));

    space.position.x = x;
    space.position.y = y;
    space.position.z = z;
    space.rotation.x = rx * (Math.PI / 180);
    space.rotation.y = ry * (Math.PI / 180);
    space.rotation.z = rz * (Math.PI / 180);
    space.scale.x = sx;
    space.scale.y = sy === undefined ? sx : sy;
    space.scale.z = sz === undefined ? sx : sz;
    this.parentSpace.add(space);

    const parentForm = findParent(
      this,
      (e) => e instanceof MetaverseForm
    ) as MetaverseForm;
    if (parentForm === null) {
      throw new Error("No parent form found for mv-model");
    }

    const afterSetup = (obj: any, isDefault: boolean) => {
      if (this.type === "submit") {
        this.unregisters.push(
          registerFn.call(undefined, obj, (intersection) => {
            parentForm.submit(intersection, this.name, this.value);
          })
        );
      } else if (this.type === "checkbox") {
        if (this.value === "") {
          this.value = "false";
        }
        this.unregisters.push(
          registerFn.call(undefined, obj, () => {
            if (isDefault) {
              if (this.value === "true") {
                this.value = "false";
                obj.material.color.setHex(0x666666);
              } else {
                this.value = "true";
                obj.material.color.setHex(0xffffff);
              }
            }
          })
        );
        parentForm.registerInput(this);
      } else if (this.type === "text" || this.type === "password") {
        this.unregisters.push(
          registerFn.call(undefined, obj, () => {
            this.value = window.prompt("Enter text", this.value) ?? "";
            if (isDefault) {
              if (this.value === "") {
                obj.material.color.setHex(0x666666);
              } else {
                obj.material.color.setHex(0xffffff);
              }
            }
          })
        );
        parentForm.registerInput(this);
      }
    };

    if (this.src !== undefined && this.src !== "") {
      const loader = new GLTFLoader();
      loader.load(this.src, (gltf) => {
        space.add(gltf.scene);
        this.isLoaded = true;
        // emit loaded event
        this.dispatchEvent(
          new CustomEvent("loaded", {
            detail: { model: gltf.scene },
          })
        );
        afterSetup(gltf.scene, true);
      });
    } else {
      const cube = new Mesh(
        new BoxGeometry(0.1, 0.1, 0.1),
        new MeshStandardMaterial({
          color: this.value === "true" ? 0xfffffff : 0x666666,
        })
      );

      space.add(cube);
      this.isLoaded = true;
      // emit loaded event
      this.dispatchEvent(
        new CustomEvent("loaded", {
          detail: { model: cube },
        })
      );
      afterSetup(cube, true);
    }
  }

  // disconnected
  disconnectedCallback() {
    super.disconnectedCallback();
    this.parentSpace?.remove(this.space);
    this.unregisters.forEach((unregister) => unregister());
  }

  render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mv-input": MetaverseInput;
  }
}
