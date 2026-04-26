import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#id Tag#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Name of the source image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#source_image Tag#source_image}
    */
    readonly sourceImage: string;
    /**
    * List of values which cause the tag to be (re)created. This is useful for triggering a new tag when the source image changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#tag_triggers Tag#tag_triggers}
    */
    readonly tagTriggers?: string[];
    /**
    * Name of the target image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#target_image Tag#target_image}
    */
    readonly targetImage: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag docker_tag}
*/
export declare class Tag extends cdktf.TerraformResource {
    static readonly tfResourceType = "docker_tag";
    /**
    * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Tag to import
    * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Tag to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/kreuzwerker/docker/4.2.0/docs/resources/tag docker_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TagConfig
    */
    constructor(scope: Construct, id: string, config: TagConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _sourceImage?;
    get sourceImage(): string;
    set sourceImage(value: string);
    get sourceImageInput(): string;
    get sourceImageId(): any;
    private _tagTriggers?;
    get tagTriggers(): string[];
    set tagTriggers(value: string[]);
    resetTagTriggers(): void;
    get tagTriggersInput(): string[];
    private _targetImage?;
    get targetImage(): string;
    set targetImage(value: string);
    get targetImageInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
