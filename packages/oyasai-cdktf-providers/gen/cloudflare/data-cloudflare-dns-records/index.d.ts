import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataCloudflareDnsRecordsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#comment DataCloudflareDnsRecords#comment}
    */
    readonly comment?: DataCloudflareDnsRecordsComment;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#content DataCloudflareDnsRecords#content}
    */
    readonly content?: DataCloudflareDnsRecordsContent;
    /**
    * Direction to order DNS records in.
    * Available values: "asc", "desc".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#direction DataCloudflareDnsRecords#direction}
    */
    readonly direction?: string;
    /**
    * Whether to match all search requirements or at least one (any). If set to `all`, acts like a logical AND between filters. If set to `any`, acts like a logical OR instead. Note that the interaction between tag filters is controlled by the `tag-match` parameter instead.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#match DataCloudflareDnsRecords#match}
    */
    readonly match?: string;
    /**
    * Max items to fetch, default: 1000
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#max_items DataCloudflareDnsRecords#max_items}
    */
    readonly maxItems?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#name DataCloudflareDnsRecords#name}
    */
    readonly name?: DataCloudflareDnsRecordsName;
    /**
    * Field to order DNS records by.
    * Available values: "type", "name", "content", "ttl", "proxied".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#order DataCloudflareDnsRecords#order}
    */
    readonly order?: string;
    /**
    * Whether the record is receiving the performance and security benefits of Cloudflare.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#proxied DataCloudflareDnsRecords#proxied}
    */
    readonly proxied?: boolean | cdktf.IResolvable;
    /**
    * Allows searching in multiple properties of a DNS record simultaneously. This parameter is intended for human users, not automation. Its exact behavior is intentionally left unspecified and is subject to change in the future. This parameter works independently of the `match` setting. For automated searches, please use the other available parameters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#search DataCloudflareDnsRecords#search}
    */
    readonly search?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#tag DataCloudflareDnsRecords#tag}
    */
    readonly tag?: DataCloudflareDnsRecordsTag;
    /**
    * Whether to match all tag search requirements or at least one (any). If set to `all`, acts like a logical AND between tag filters. If set to `any`, acts like a logical OR instead. Note that the regular `match` parameter is still used to combine the resulting condition with other filters that aren't related to tags.
    * Available values: "any", "all".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#tag_match DataCloudflareDnsRecords#tag_match}
    */
    readonly tagMatch?: string;
    /**
    * Record type.
    * Available values: "A", "AAAA", "CAA", "CERT", "CNAME", "DNSKEY", "DS", "HTTPS", "LOC", "MX", "NAPTR", "NS", "OPENPGPKEY", "PTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URI".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#type DataCloudflareDnsRecords#type}
    */
    readonly type?: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#zone_id DataCloudflareDnsRecords#zone_id}
    */
    readonly zoneId?: string;
}
export interface DataCloudflareDnsRecordsComment {
    /**
    * If this parameter is present, only records *without* a comment are returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}
    */
    readonly absent?: string;
    /**
    * Substring of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}
    */
    readonly exact?: string;
    /**
    * If this parameter is present, only records *with* a comment are returned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}
    */
    readonly present?: string;
    /**
    * Prefix of the DNS record comment. Comment filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordsCommentToTerraform(struct?: DataCloudflareDnsRecordsComment | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordsCommentToHclTerraform(struct?: DataCloudflareDnsRecordsComment | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordsCommentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordsComment | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordsComment | cdktf.IResolvable | undefined);
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
export interface DataCloudflareDnsRecordsContent {
    /**
    * Substring of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}
    */
    readonly exact?: string;
    /**
    * Prefix of the DNS record content. Content filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordsContentToTerraform(struct?: DataCloudflareDnsRecordsContent | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordsContentToHclTerraform(struct?: DataCloudflareDnsRecordsContent | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordsContentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordsContent | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordsContent | cdktf.IResolvable | undefined);
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
export interface DataCloudflareDnsRecordsName {
    /**
    * Substring of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}
    */
    readonly contains?: string;
    /**
    * Suffix of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}
    */
    readonly endswith?: string;
    /**
    * Exact value of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}
    */
    readonly exact?: string;
    /**
    * Prefix of the DNS record name. Name filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordsNameToTerraform(struct?: DataCloudflareDnsRecordsName | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordsNameToHclTerraform(struct?: DataCloudflareDnsRecordsName | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordsNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordsName | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordsName | cdktf.IResolvable | undefined);
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
export interface DataCloudflareDnsRecordsResultData {
}
export declare function dataCloudflareDnsRecordsResultDataToTerraform(struct?: DataCloudflareDnsRecordsResultData): any;
export declare function dataCloudflareDnsRecordsResultDataToHclTerraform(struct?: DataCloudflareDnsRecordsResultData): any;
export declare class DataCloudflareDnsRecordsResultDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordsResultData | undefined;
    set internalValue(value: DataCloudflareDnsRecordsResultData | undefined);
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
export interface DataCloudflareDnsRecordsResultSettings {
}
export declare function dataCloudflareDnsRecordsResultSettingsToTerraform(struct?: DataCloudflareDnsRecordsResultSettings): any;
export declare function dataCloudflareDnsRecordsResultSettingsToHclTerraform(struct?: DataCloudflareDnsRecordsResultSettings): any;
export declare class DataCloudflareDnsRecordsResultSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordsResultSettings | undefined;
    set internalValue(value: DataCloudflareDnsRecordsResultSettings | undefined);
    get flattenCname(): any;
    get ipv4Only(): any;
    get ipv6Only(): any;
}
export interface DataCloudflareDnsRecordsResult {
}
export declare function dataCloudflareDnsRecordsResultToTerraform(struct?: DataCloudflareDnsRecordsResult): any;
export declare function dataCloudflareDnsRecordsResultToHclTerraform(struct?: DataCloudflareDnsRecordsResult): any;
export declare class DataCloudflareDnsRecordsResultOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataCloudflareDnsRecordsResult | undefined;
    set internalValue(value: DataCloudflareDnsRecordsResult | undefined);
    get comment(): any;
    get commentModifiedOn(): any;
    get content(): any;
    get createdOn(): any;
    private _data;
    get data(): DataCloudflareDnsRecordsResultDataOutputReference;
    get id(): any;
    get meta(): any;
    get modifiedOn(): any;
    get name(): any;
    get priority(): any;
    get privateRouting(): any;
    get proxiable(): any;
    get proxied(): any;
    private _settings;
    get settings(): DataCloudflareDnsRecordsResultSettingsOutputReference;
    get tags(): any;
    get tagsModifiedOn(): any;
    get ttl(): any;
    get type(): any;
}
export declare class DataCloudflareDnsRecordsResultList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataCloudflareDnsRecordsResultOutputReference;
}
export interface DataCloudflareDnsRecordsTag {
    /**
    * Name of a tag which must *not* be present on the DNS record. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#absent DataCloudflareDnsRecords#absent}
    */
    readonly absent?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value contains `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#contains DataCloudflareDnsRecords#contains}
    */
    readonly contains?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value ends with `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#endswith DataCloudflareDnsRecords#endswith}
    */
    readonly endswith?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value is `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#exact DataCloudflareDnsRecords#exact}
    */
    readonly exact?: string;
    /**
    * Name of a tag which must be present on the DNS record. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#present DataCloudflareDnsRecords#present}
    */
    readonly present?: string;
    /**
    * A tag and value, of the form `<tag-name>:<tag-value>`. The API will only return DNS records that have a tag named `<tag-name>` whose value starts with `<tag-value>`. Tag filters are case-insensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#startswith DataCloudflareDnsRecords#startswith}
    */
    readonly startswith?: string;
}
export declare function dataCloudflareDnsRecordsTagToTerraform(struct?: DataCloudflareDnsRecordsTag | cdktf.IResolvable): any;
export declare function dataCloudflareDnsRecordsTagToHclTerraform(struct?: DataCloudflareDnsRecordsTag | cdktf.IResolvable): any;
export declare class DataCloudflareDnsRecordsTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataCloudflareDnsRecordsTag | cdktf.IResolvable | undefined;
    set internalValue(value: DataCloudflareDnsRecordsTag | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records cloudflare_dns_records}
*/
export declare class DataCloudflareDnsRecords extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "cloudflare_dns_records";
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsRecords resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecords to import
    * @param importFromId The id of the existing DataCloudflareDnsRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsRecords to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_records cloudflare_dns_records} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsRecordsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataCloudflareDnsRecordsConfig);
    private _comment;
    get comment(): DataCloudflareDnsRecordsCommentOutputReference;
    putComment(value: DataCloudflareDnsRecordsComment): void;
    resetComment(): void;
    get commentInput(): any;
    private _content;
    get content(): DataCloudflareDnsRecordsContentOutputReference;
    putContent(value: DataCloudflareDnsRecordsContent): void;
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
    private _maxItems?;
    get maxItems(): number;
    set maxItems(value: number);
    resetMaxItems(): void;
    get maxItemsInput(): number;
    private _name;
    get name(): DataCloudflareDnsRecordsNameOutputReference;
    putName(value: DataCloudflareDnsRecordsName): void;
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
    private _result;
    get result(): DataCloudflareDnsRecordsResultList;
    private _search?;
    get search(): string;
    set search(value: string);
    resetSearch(): void;
    get searchInput(): string;
    private _tag;
    get tag(): DataCloudflareDnsRecordsTagOutputReference;
    putTag(value: DataCloudflareDnsRecordsTag): void;
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
