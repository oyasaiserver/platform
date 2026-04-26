import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Indicate if the webhook should receive events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#active OrganizationWebhook#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * A list of events which should trigger the webhook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#events OrganizationWebhook#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#id OrganizationWebhook#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#configuration OrganizationWebhook#configuration}
    */
    readonly configuration?: OrganizationWebhookConfiguration;
}
export interface OrganizationWebhookConfiguration {
    /**
    * The content type for the payload. Valid values are either 'form' or 'json'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#content_type OrganizationWebhook#content_type}
    */
    readonly contentType?: string;
    /**
    * Insecure SSL boolean toggle. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#insecure_ssl OrganizationWebhook#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * The shared secret for the webhook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#secret OrganizationWebhook#secret}
    */
    readonly secret?: string;
    /**
    * The URL of the webhook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#url OrganizationWebhook#url}
    */
    readonly url: string;
}
export declare function organizationWebhookConfigurationToTerraform(struct?: OrganizationWebhookConfigurationOutputReference | OrganizationWebhookConfiguration): any;
export declare function organizationWebhookConfigurationToHclTerraform(struct?: OrganizationWebhookConfigurationOutputReference | OrganizationWebhookConfiguration): any;
export declare class OrganizationWebhookConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationWebhookConfiguration | undefined;
    set internalValue(value: OrganizationWebhookConfiguration | undefined);
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    resetContentType(): void;
    get contentTypeInput(): string;
    private _insecureSsl?;
    get insecureSsl(): boolean | cdktf.IResolvable;
    set insecureSsl(value: boolean | cdktf.IResolvable);
    resetInsecureSsl(): void;
    get insecureSslInput(): any;
    private _secret?;
    get secret(): string;
    set secret(value: string);
    resetSecret(): void;
    get secretInput(): string;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook github_organization_webhook}
*/
export declare class OrganizationWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_organization_webhook";
    /**
    * Generates CDKTF code for importing a OrganizationWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationWebhook to import
    * @param importFromId The id of the existing OrganizationWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_webhook github_organization_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationWebhookConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationWebhookConfig);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): any;
    get etag(): any;
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    get url(): any;
    private _configuration;
    get configuration(): OrganizationWebhookConfigurationOutputReference;
    putConfiguration(value: OrganizationWebhookConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): OrganizationWebhookConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
