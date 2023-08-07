import { LitElement } from "lit";
import { Object3D } from "three";
export declare class MetaverseSpace extends LitElement {
    space: Object3D<import("three").Event>;
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "mv-space": MetaverseSpace;
    }
}
