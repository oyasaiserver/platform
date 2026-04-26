import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareObservatoryScheduledTestConfig extends cdktf.TerraformMetaArguments {
    /**
    * A test region.
    * Available values: "asia-east1", "asia-northeast1", "asia-northeast2", "asia-south1", "asia-southeast1", "australia-southeast1", "europe-north1", "europe-southwest1", "europe-west1", "europe-west2", "europe-west3", "europe-west4", "europe-west8", "europe-west9", "me-west1", "southamerica-east1", "us-central1", "us-east1", "us-east4", "us-south1", "us-west1".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test#region DataCloudflareObservatoryScheduledTest#region}
    */
    readonly region?: string;
    /**
    * A URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test#url DataCloudflareObservatoryScheduledTest#url}
    */
    readonly url: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test#zone_id DataCloudflareObservatoryScheduledTest#zone_id}
    */
    readonly zoneId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
export declare class DataCloudflareObservatoryScheduledTest extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_observatory_scheduled_test";
    /**
    * Generates CDKTF code for importing a DataCloudflareObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareObservatoryScheduledTest to import
    * @param importFromId The id of the existing DataCloudflareObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareObservatoryScheduledTest to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareObservatoryScheduledTestConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareObservatoryScheduledTestConfig);
    get frequency(): any;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    resetZoneId(): void;
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
