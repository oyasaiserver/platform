import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image#account_id DataCloudflareImage#account_id}
    */
    readonly accountId?: string;
    /**
    * Image unique identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image#image_id DataCloudflareImage#image_id}
    */
    readonly imageId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image cloudflare_image}
*/
export declare class DataCloudflareImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_image";
    /**
    * Generates CDKTF code for importing a DataCloudflareImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareImage to import
    * @param importFromId The id of the existing DataCloudflareImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/image cloudflare_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareImageConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareImageConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get creator(): any;
    get filename(): any;
    get id(): any;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    get imageIdInput(): string;
    get meta(): any;
    get requireSignedUrls(): any;
    get uploaded(): any;
    get variants(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
