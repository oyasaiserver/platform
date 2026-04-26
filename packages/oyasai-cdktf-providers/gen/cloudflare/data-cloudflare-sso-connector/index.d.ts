import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareSsoConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector#account_id DataCloudflareSsoConnector#account_id}
    */
    readonly accountId?: string;
    /**
    * SSO Connector identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector#sso_connector_id DataCloudflareSsoConnector#sso_connector_id}
    */
    readonly ssoConnectorId: string;
}
export interface DataCloudflareSsoConnectorVerification {
}
export declare function dataCloudflareSsoConnectorVerificationToTerraform(struct?: DataCloudflareSsoConnectorVerification): any;
export declare function dataCloudflareSsoConnectorVerificationToHclTerraform(struct?: DataCloudflareSsoConnectorVerification): any;
export declare class DataCloudflareSsoConnectorVerificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareSsoConnectorVerification | undefined;
    set internalValue(value: DataCloudflareSsoConnectorVerification | undefined);
    get code(): any;
    get status(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector cloudflare_sso_connector}
*/
export declare class DataCloudflareSsoConnector extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_sso_connector";
    /**
    * Generates CDKTF code for importing a DataCloudflareSsoConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareSsoConnector to import
    * @param importFromId The id of the existing DataCloudflareSsoConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareSsoConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/sso_connector cloudflare_sso_connector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareSsoConnectorConfig
    */
    constructor(scope: Construct, id: string, config: DataCloudflareSsoConnectorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    get createdOn(): any;
    get emailDomain(): any;
    get enabled(): any;
    get id(): any;
    private _ssoConnectorId?;
    get ssoConnectorId(): string;
    set ssoConnectorId(value: string);
    get ssoConnectorIdInput(): string;
    get updatedOn(): any;
    get useFedrampLanguage(): any;
    private _verification;
    get verification(): DataCloudflareSsoConnectorVerificationOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
