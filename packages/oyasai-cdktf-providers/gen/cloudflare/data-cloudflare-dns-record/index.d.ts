import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsRecordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#dns_record_id DataCloudflareDnsRecord#dns_record_id}
    */
    readonly dnsRecordId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#filter DataCloudflareDnsRecord#filter}
    */
    readonly filter?: DataCloudflareDnsRecordFilter;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#zone_id DataCloudflareDnsRecord#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareDnsRecordData {
}
export declare function dataCloudflareDnsRecordDataToTerraform(struct?: DataCloudflareDnsRecordData): any;
export declare function dataCloudflareDnsRecordDataToHclTerraform(struct?: DataCloudflareDnsRecordData): any;
export declare class DataCloudflareDnsRecordDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordData | undefined;
    set internalValue(value: DataCloudflareDnsRecordData | undefined);
    get algorithm(): any;
    get altitude(): any;
    get certificate(): any;
    get digest(): any;
    get digestType(): any;
    get fingerprint(): any;
    private _flags;
    get flags(): any;
    get keyTag(): any;
    get latDegrees(): any;
    get latDirection(): any;
    get latMinutes(): any;
    get latSeconds(): any;
    get longDegrees(): any;
    get longDirection(): any;
    get longMinutes(): any;
    get longSeconds(): any;
    get matchingType(): any;
    get order(): any;
    get port(): any;
    get precisionHorz(): any;
    get precisionVert(): any;
    get preference(): any;
    get priority(): any;
    get protocol(): any;
    get publicKey(): any;
    get regex(): any;
    get replacement(): any;
    get selector(): any;
    get service(): any;
    get size(): any;
    get tag(): any;
    get target(): any;
    get type(): any;
    get usage(): any;
    get value(): any;
    get weight(): any;
}
export interface DataCloudflareDnsRecordFilterComment {
    /**
    * If this parameter is present, only records *without* a comment are returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}
    */
    readonly absent?: string;
    /**
    * Substring of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
    */
    readonly exact?: string;
    /**
    * If this parameter is present, only records *with* a comment are returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}
    */
    readonly present?: string;
    /**
    * Prefix of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordFilterCommentToTerraform(struct?: DataCloudflareDnsRecordFilterComment | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordFilterCommentToHclTerraform(struct?: DataCloudflareDnsRecordFilterComment | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordFilterCommentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordFilterComment | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordFilterComment | cdktf.IResolvable | undefined);
    private _absent?;
    get absent(): string;
    set absent(value: string);
    resetAbsent(): void;
    get absentInput(): string;
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string;
    private _endswith?;
    get endswith(): string;
    set endswith(value: string);
    resetEndswith(): void;
    get endswithInput(): string;
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _present?;
    get present(): string;
    set present(value: string);
    resetPresent(): void;
    get presentInput(): string;
    private _startswith?;
    get startswith(): string;
    set startswith(value: string);
    resetStartswith(): void;
    get startswithInput(): string;
}
export interface DataCloudflareDnsRecordFilterContent {
    /**
    * Substring of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
    */
    readonly exact?: string;
    /**
    * Prefix of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordFilterContentToTerraform(struct?: DataCloudflareDnsRecordFilterContent | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordFilterContentToHclTerraform(struct?: DataCloudflareDnsRecordFilterContent | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordFilterContentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordFilterContent | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordFilterContent | cdktf.IResolvable | undefined);
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string;
    private _endswith?;
    get endswith(): string;
    set endswith(value: string);
    resetEndswith(): void;
    get endswithInput(): string;
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _startswith?;
    get startswith(): string;
    set startswith(value: string);
    resetStartswith(): void;
    get startswithInput(): string;
}
export interface DataCloudflareDnsRecordFilterName {
    /**
    * Substring of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
    */
    readonly exact?: string;
    /**
    * Prefix of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordFilterNameToTerraform(struct?: DataCloudflareDnsRecordFilterName | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordFilterNameToHclTerraform(struct?: DataCloudflareDnsRecordFilterName | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordFilterNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordFilterName | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordFilterName | cdktf.IResolvable | undefined);
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string;
    private _endswith?;
    get endswith(): string;
    set endswith(value: string);
    resetEndswith(): void;
    get endswithInput(): string;
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _startswith?;
    get startswith(): string;
    set startswith(value: string);
    resetStartswith(): void;
    get startswithInput(): string;
}
export interface DataCloudflareDnsRecordFilterTag {
    /**
    * Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#absent DataCloudflareDnsRecord#absent}
    */
    readonly absent?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#contains DataCloudflareDnsRecord#contains}
    */
    readonly contains?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#endswith DataCloudflareDnsRecord#endswith}
    */
    readonly endswith?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#exact DataCloudflareDnsRecord#exact}
    */
    readonly exact?: string;
    /**
    * Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#present DataCloudflareDnsRecord#present}
    */
    readonly present?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#startswith DataCloudflareDnsRecord#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordFilterTagToTerraform(struct?: DataCloudflareDnsRecordFilterTag | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordFilterTagToHclTerraform(struct?: DataCloudflareDnsRecordFilterTag | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordFilterTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordFilterTag | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordFilterTag | cdktf.IResolvable | undefined);
    private _absent?;
    get absent(): string;
    set absent(value: string);
    resetAbsent(): void;
    get absentInput(): string;
    private _contains?;
    get contains(): string;
    set contains(value: string);
    resetContains(): void;
    get containsInput(): string;
    private _endswith?;
    get endswith(): string;
    set endswith(value: string);
    resetEndswith(): void;
    get endswithInput(): string;
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string;
    private _present?;
    get present(): string;
    set present(value: string);
    resetPresent(): void;
    get presentInput(): string;
    private _startswith?;
    get startswith(): string;
    set startswith(value: string);
    resetStartswith(): void;
    get startswithInput(): string;
}
export interface DataCloudflareDnsRecordFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#comment DataCloudflareDnsRecord#comment}
    */
    readonly comment?: DataCloudflareDnsRecordFilterComment;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#content DataCloudflareDnsRecord#content}
    */
    readonly content?: DataCloudflareDnsRecordFilterContent;
    /**
    * Direction to order DNS records in.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#direction DataCloudflareDnsRecord#direction}
    */
    readonly direction?: string;
    /**
    * Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#match DataCloudflareDnsRecord#match}
    */
    readonly match?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#name DataCloudflareDnsRecord#name}
    */
    readonly name?: DataCloudflareDnsRecordFilterName;
    /**
    * Field to order DNS records by.
    * Available values: "type", "name", "content", "ttl", "proxied".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#order DataCloudflareDnsRecord#order}
    */
    readonly order?: string;
    /**
    * Whether the record is receiving the performance and security benefits of Cloudflare.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#proxied DataCloudflareDnsRecord#proxied}
    */
    readonly proxied?: boolean | cdktf.IResolvable;
    /**
    * Allows searching in multiple properties of a DNS record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#search DataCloudflareDnsRecord#search}
    */
    readonly search?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#tag DataCloudflareDnsRecord#tag}
    */
    readonly tag?: DataCloudflareDnsRecordFilterTag;
    /**
    * Whether to match all tag search requirements or at least one (any). If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#tag_match DataCloudflareDnsRecord#tag_match}
    */
    readonly tagMatch?: string;
    /**
    * Record type.
    * Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#type DataCloudflareDnsRecord#type}
    */
    readonly type?: string;
}
export declare function dataCloudflareDnsRecordFilterToTerraform(struct?: DataCloudflareDnsRecordFilter | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordFilterToHclTerraform(struct?: DataCloudflareDnsRecordFilter | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordFilter | cdktf.IResolvable | undefined);
    private _comment;
    get comment(): DataCloudflareDnsRecordFilterCommentOutputReference;
    putComment(value: DataCloudflareDnsRecordFilterComment): void;
    resetComment(): void;
    get commentInput(): any;
    private _content;
    get content(): DataCloudflareDnsRecordFilterContentOutputReference;
    putContent(value: DataCloudflareDnsRecordFilterContent): void;
    resetContent(): void;
    get contentInput(): any;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    resetDirection(): void;
    get directionInput(): string;
    private _match?;
    get match(): string;
    set match(value: string);
    resetMatch(): void;
    get matchInput(): string;
    private _name;
    get name(): DataCloudflareDnsRecordFilterNameOutputReference;
    putName(value: DataCloudflareDnsRecordFilterName): void;
    resetName(): void;
    get nameInput(): any;
    private _order?;
    get order(): string;
    set order(value: string);
    resetOrder(): void;
    get orderInput(): string;
    private _proxied?;
    get proxied(): boolean | cdktf.IResolvable;
    set proxied(value: boolean | cdktf.IResolvable);
    resetProxied(): void;
    get proxiedInput(): any;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    private _tag;
    get tag(): DataCloudflareDnsRecordFilterTagOutputReference;
    putTag(value: DataCloudflareDnsRecordFilterTag): void;
    resetTag(): void;
    get tagInput(): any;
    private _tagMatch?;
    get tagMatch(): string;
    set tagMatch(value: string);
    resetTagMatch(): void;
    get tagMatchInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface DataCloudflareDnsRecordSettings {
}
export declare function dataCloudflareDnsRecordSettingsToTerraform(struct?: DataCloudflareDnsRecordSettings): any;
export declare function dataCloudflareDnsRecordSettingsToHclTerraform(struct?: DataCloudflareDnsRecordSettings): any;
export declare class DataCloudflareDnsRecordSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordSettings | undefined;
    set internalValue(value: DataCloudflareDnsRecordSettings | undefined);
    get flattenCname(): any;
    get ipv4Only(): any;
    get ipv6Only(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record cloudflare_dns_record}
*/
export declare class DataCloudflareDnsRecord extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_record";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecord to import
    * @param importFromId The id of the existing DataCloudflareDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsRecord to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record cloudflare_dns_record} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsRecordConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsRecordConfig);
    get comment(): any;
    get commentModifiedOn(): any;
    get content(): any;
    get createdOn(): any;
    private _data;
    get data(): DataCloudflareDnsRecordDataOutputReference;
    private _dnsRecordId?;
    get dnsRecordId(): string;
    set dnsRecordId(value: string);
    resetDnsRecordId(): void;
    get dnsRecordIdInput(): string;
    private _filter;
    get filter(): DataCloudflareDnsRecordFilterOutputReference;
    putFilter(value: DataCloudflareDnsRecordFilter): void;
    resetFilter(): void;
    get filterInput(): any;
    get id(): any;
    get meta(): any;
    get modifiedOn(): any;
    get name(): any;
    get priority(): any;
    get privateRouting(): any;
    get proxiable(): any;
    get proxied(): any;
    private _settings;
    get settings(): DataCloudflareDnsRecordSettingsOutputReference;
    get tags(): any;
    get tagsModifiedOn(): any;
    get ttl(): any;
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
