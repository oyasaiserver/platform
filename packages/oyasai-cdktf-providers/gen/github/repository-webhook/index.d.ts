import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RepositoryWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Indicate if the webhook should receive events. Defaults to 'true'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#active RepositoryWebhook#active}
    */
    readonly active?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#etag RepositoryWebhook#etag}
    */
    readonly etag?: string;
    /**
    * A list of events which should trigger the webhook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#events RepositoryWebhook#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#id RepositoryWebhook#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The repository name of the webhook, not including the organization, which will be inferred.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#repository RepositoryWebhook#repository}
    */
    readonly repository: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#configuration RepositoryWebhook#configuration}
    */
    readonly configuration?: RepositoryWebhookConfiguration;
}
export interface RepositoryWebhookConfiguration {
    /**
    * The content type for the payload. Valid values are either 'form' or 'json'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#content_type RepositoryWebhook#content_type}
    */
    readonly contentType?: string;
    /**
    * Insecure SSL boolean toggle. Defaults to 'false'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#insecure_ssl RepositoryWebhook#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * The shared secret for the webhook
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#secret RepositoryWebhook#secret}
    */
    readonly secret?: string;
    /**
    * The URL of the webhook.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#url RepositoryWebhook#url}
    */
    readonly url: string;
}
export declare function repositoryWebhookConfigurationToTerraform(struct?: RepositoryWebhookConfigurationOutputReference | RepositoryWebhookConfiguration): any;
export declare function repositoryWebhookConfigurationToHclTerraform(struct?: RepositoryWebhookConfigurationOutputReference | RepositoryWebhookConfiguration): any;
export declare class RepositoryWebhookConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RepositoryWebhookConfiguration | undefined;
    set internalValue(value: RepositoryWebhookConfiguration | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook github_repository_webhook}
*/
export declare class RepositoryWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType = "github_repository_webhook";
    /**
    * Generates CDKTF code for importing a RepositoryWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryWebhook to import
    * @param importFromId The id of the existing RepositoryWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_webhook github_repository_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryWebhookConfig
    */
    constructor(scope: Construct, id: string, config: RepositoryWebhookConfig);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    resetActive(): void;
    get activeInput(): any;
    private _etag?;
    get etag(): string;
    set etag(value: string);
    resetEtag(): void;
    get etagInput(): string;
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
    get url(): any;
    private _configuration;
    get configuration(): RepositoryWebhookConfigurationOutputReference;
    putConfiguration(value: RepositoryWebhookConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): RepositoryWebhookConfiguration;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
