import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account identifier tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#account_id SsoConnector#account_id}
    */
    readonly accountId?: string;
    /**
    * Begin the verification process after creation
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#begin_verification SsoConnector#begin_verification}
    */
    readonly beginVerification?: boolean | cdktf.IResolvable;
    /**
    * Email domain of the new SSO connector
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#email_domain SsoConnector#email_domain}
    */
    readonly emailDomain: string;
    /**
    * SSO Connector enabled state
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#enabled SsoConnector#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Controls the display of FedRAMP language to the user during SSO login
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#use_fedramp_language SsoConnector#use_fedramp_language}
    */
    readonly useFedrampLanguage?: boolean | cdktf.IResolvable;
}
export interface SsoConnectorVerification {
}
export declare function ssoConnectorVerificationToTerraform(struct?: SsoConnectorVerification): any;
export declare function ssoConnectorVerificationToHclTerraform(struct?: SsoConnectorVerification): any;
export declare class SsoConnectorVerificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsoConnectorVerification | undefined;
    set internalValue(value: SsoConnectorVerification | undefined);
    get code(): any;
    get status(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector cloudflare_sso_connector}
*/
export declare class SsoConnector extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_sso_connector";
    /**
    * Generates CDKTF code for importing a SsoConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoConnector to import
    * @param importFromId The id of the existing SsoConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/sso_connector cloudflare_sso_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoConnectorConfig
    */
    constructor(scope: Construct, id: string, config: SsoConnectorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _beginVerification?;
    get beginVerification(): boolean | cdktf.IResolvable;
    set beginVerification(value: boolean | cdktf.IResolvable);
    resetBeginVerification(): void;
    get beginVerificationInput(): any;
    get createdOn(): any;
    private _emailDomain?;
    get emailDomain(): string;
    set emailDomain(value: string);
    get emailDomainInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): any;
    get id(): any;
    get updatedOn(): any;
    private _useFedrampLanguage?;
    get useFedrampLanguage(): boolean | cdktf.IResolvable;
    set useFedrampLanguage(value: boolean | cdktf.IResolvable);
    resetUseFedrampLanguage(): void;
    get useFedrampLanguageInput(): any;
    private _verification;
    get verification(): SsoConnectorVerificationOutputReference;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
