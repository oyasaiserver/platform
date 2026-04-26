import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmailSecurityTrustedDomainsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Account Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#body EmailSecurityTrustedDomains#body}
    */
    readonly body?: EmailSecurityTrustedDomainsBody[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}
    */
    readonly comments?: string;
    /**
    * Select to prevent recently registered domains from triggering a
    * Suspicious or Malicious disposition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}
    */
    readonly isRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}
    */
    readonly isRegex?: boolean | cdktf.IResolvable;
    /**
    * Select for partner or other approved domains that have similar
    * spelling to your connected domains. Prevents listed domains from
    * triggering a Spoof disposition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}
    */
    readonly isSimilarity?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}
    */
    readonly pattern?: string;
}
export interface EmailSecurityTrustedDomainsBody {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}
    */
    readonly comments?: string;
    /**
    * Select to prevent recently registered domains from triggering a
    * Suspicious or Malicious disposition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}
    */
    readonly isRecent: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}
    */
    readonly isRegex: boolean | cdktf.IResolvable;
    /**
    * Select for partner or other approved domains that have similar
    * spelling to your connected domains. Prevents listed domains from
    * triggering a Spoof disposition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}
    */
    readonly isSimilarity: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}
    */
    readonly pattern: string;
}
export declare function emailSecurityTrustedDomainsBodyToTerraform(struct?: EmailSecurityTrustedDomainsBody | cdktf.IResolvable): any;
export declare function emailSecurityTrustedDomainsBodyToHclTerraform(struct?: EmailSecurityTrustedDomainsBody | cdktf.IResolvable): any;
export declare class EmailSecurityTrustedDomainsBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmailSecurityTrustedDomainsBody | cdktf.IResolvable | undefined;
    set internalValue(value: EmailSecurityTrustedDomainsBody | cdktf.IResolvable | undefined);
    private _comments?;
    get comments(): string;
    set comments(value: string);
    resetComments(): void;
    get commentsInput(): string;
    private _isRecent?;
    get isRecent(): boolean | cdktf.IResolvable;
    set isRecent(value: boolean | cdktf.IResolvable);
    get isRecentInput(): any;
    private _isRegex?;
    get isRegex(): boolean | cdktf.IResolvable;
    set isRegex(value: boolean | cdktf.IResolvable);
    get isRegexInput(): any;
    private _isSimilarity?;
    get isSimilarity(): boolean | cdktf.IResolvable;
    set isSimilarity(value: boolean | cdktf.IResolvable);
    get isSimilarityInput(): any;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string;
}
export declare class EmailSecurityTrustedDomainsBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmailSecurityTrustedDomainsBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmailSecurityTrustedDomainsBodyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}
*/
export declare class EmailSecurityTrustedDomains extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_email_security_trusted_domains";
    /**
    * Generates CDKTF code for importing a EmailSecurityTrustedDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmailSecurityTrustedDomains to import
    * @param importFromId The id of the existing EmailSecurityTrustedDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmailSecurityTrustedDomainsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EmailSecurityTrustedDomainsConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _body;
    get body(): EmailSecurityTrustedDomainsBodyList;
    putBody(value: EmailSecurityTrustedDomainsBody[] | cdktf.IResolvable): void;
    resetBody(): void;
    get bodyInput(): any;
    private _comments?;
    get comments(): string;
    set comments(value: string);
    resetComments(): void;
    get commentsInput(): string;
    get createdAt(): any;
    get id(): any;
    private _isRecent?;
    get isRecent(): boolean | cdktf.IResolvable;
    set isRecent(value: boolean | cdktf.IResolvable);
    resetIsRecent(): void;
    get isRecentInput(): any;
    private _isRegex?;
    get isRegex(): boolean | cdktf.IResolvable;
    set isRegex(value: boolean | cdktf.IResolvable);
    resetIsRegex(): void;
    get isRegexInput(): any;
    private _isSimilarity?;
    get isSimilarity(): boolean | cdktf.IResolvable;
    set isSimilarity(value: boolean | cdktf.IResolvable);
    resetIsSimilarity(): void;
    get isSimilarityInput(): any;
    get lastModified(): any;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    resetPattern(): void;
    get patternInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
