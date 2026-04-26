import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareHealthcheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck#healthcheck_id DataCloudflareHealthcheck#healthcheck_id}
    */
    readonly healthcheckId: string;
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck#zone_id DataCloudflareHealthcheck#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareHealthcheckHttpConfig {
}
export declare function dataCloudflareHealthcheckHttpConfigToTerraform(struct?: DataCloudflareHealthcheckHttpConfig): any;
export declare function dataCloudflareHealthcheckHttpConfigToHclTerraform(struct?: DataCloudflareHealthcheckHttpConfig): any;
export declare class DataCloudflareHealthcheckHttpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHealthcheckHttpConfig | undefined;
    set internalValue(value: DataCloudflareHealthcheckHttpConfig | undefined);
    get allowInsecure(): any;
    get expectedBody(): any;
    get expectedCodes(): any;
    get followRedirects(): any;
    private _header;
    get header(): any;
    get method(): any;
    get path(): any;
    get port(): any;
}
export interface DataCloudflareHealthcheckTcpConfig {
}
export declare function dataCloudflareHealthcheckTcpConfigToTerraform(struct?: DataCloudflareHealthcheckTcpConfig): any;
export declare function dataCloudflareHealthcheckTcpConfigToHclTerraform(struct?: DataCloudflareHealthcheckTcpConfig): any;
export declare class DataCloudflareHealthcheckTcpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareHealthcheckTcpConfig | undefined;
    set internalValue(value: DataCloudflareHealthcheckTcpConfig | undefined);
    get method(): any;
    get port(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck cloudflare_healthcheck}
*/
export declare class DataCloudflareHealthcheck extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_healthcheck";
    /**
    * Generates CDKTF code for importing a DataCloudflareHealthcheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareHealthcheck to import
    * @param importFromId The id of the existing DataCloudflareHealthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareHealthcheck to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/healthcheck cloudflare_healthcheck} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareHealthcheckConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareHealthcheckConfig);
    get address(): any;
    get checkRegions(): any;
    get consecutiveFails(): any;
    get consecutiveSuccesses(): any;
    get createdOn(): any;
    get description(): any;
    get failureReason(): any;
    private _healthcheckId?;
    get healthcheckId(): string;
    set healthcheckId(value: string);
    get healthcheckIdInput(): string;
    private _httpConfig;
    get httpConfig(): DataCloudflareHealthcheckHttpConfigOutputReference;
    get id(): any;
    get interval(): any;
    get modifiedOn(): any;
    get name(): any;
    get retries(): any;
    get status(): any;
    get suspended(): any;
    private _tcpConfig;
    get tcpConfig(): DataCloudflareHealthcheckTcpConfigOutputReference;
    get timeout(): any;
    get type(): any;
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
