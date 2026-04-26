import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DnsRecordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Comments or notes about the DNS record. This field has no effect on DNS responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#comment DnsRecord#comment}
    */
    readonly comment?: string;
    /**
    * A valid IPv4 address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#content DnsRecord#content}
    */
    readonly content?: string;
    /**
    * Components of a CAA record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#data DnsRecord#data}
    */
    readonly data?: DnsRecordData;
    /**
    * DNS record name (or @ for the zone apex) in Punycode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#name DnsRecord#name}
    */
    readonly name: string;
    /**
    * Required for MX, SRV and URI records; unused by other record types. Records with lower priorities are preferred.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#priority DnsRecord#priority}
    */
    readonly priority?: number;
    /**
    * Enables private network routing to the origin.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#private_routing DnsRecord#private_routing}
    */
    readonly privateRouting?: boolean | cdktf.IResolvable;
    /**
    * Whether the record is receiving the performance and security benefits of Cloudflare.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#proxied DnsRecord#proxied}
    */
    readonly proxied?: boolean | cdktf.IResolvable;
    /**
    * Settings for the DNS record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#settings DnsRecord#settings}
    */
    readonly settings?: DnsRecordSettings;
    /**
    * Custom tags for the DNS record. This field has no effect on DNS responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#tags DnsRecord#tags}
    */
    readonly tags?: string[];
    /**
    * Time To Live (TTL) of the DNS record in seconds. Setting to 1 means 'automatic'. Value must be between 60 and 86400, with the minimum reduced to 30 for Enterprise zones.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#ttl DnsRecord#ttl}
    */
    readonly ttl: number;
    /**
    * Record type.
    * Available values: "A", "AAAA", "CNAME", "MX", "NS", "OPENPGPKEY", "PTR", "TXT", "CAA", "CERT", "DNSKEY", "DS", "HTTPS", "LOC", "NAPTR", "SMIMEA", "SRV", "SSHFP", "SVCB", "TLSA", "URI".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#type DnsRecord#type}
    */
    readonly type: string;
    /**
    * Identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#zone_id DnsRecord#zone_id}
    */
    readonly zoneId?: string;
}
export interface DnsRecordData {
    /**
    * Algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#algorithm DnsRecord#algorithm}
    */
    readonly algorithm?: number;
    /**
    * Altitude of location in meters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#altitude DnsRecord#altitude}
    */
    readonly altitude?: number;
    /**
    * Certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#certificate DnsRecord#certificate}
    */
    readonly certificate?: string;
    /**
    * Digest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#digest DnsRecord#digest}
    */
    readonly digest?: string;
    /**
    * Digest Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#digest_type DnsRecord#digest_type}
    */
    readonly digestType?: number;
    /**
    * Fingerprint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#fingerprint DnsRecord#fingerprint}
    */
    readonly fingerprint?: string;
    /**
    * Flags for the CAA record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#flags DnsRecord#flags}
    */
    readonly flags?: {
        [key: string]: any;
    };
    /**
    * Key Tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#key_tag DnsRecord#key_tag}
    */
    readonly keyTag?: number;
    /**
    * Degrees of latitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#lat_degrees DnsRecord#lat_degrees}
    */
    readonly latDegrees?: number;
    /**
    * Latitude direction.
    * Available values: "N", "S".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#lat_direction DnsRecord#lat_direction}
    */
    readonly latDirection?: string;
    /**
    * Minutes of latitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#lat_minutes DnsRecord#lat_minutes}
    */
    readonly latMinutes?: number;
    /**
    * Seconds of latitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#lat_seconds DnsRecord#lat_seconds}
    */
    readonly latSeconds?: number;
    /**
    * Degrees of longitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#long_degrees DnsRecord#long_degrees}
    */
    readonly longDegrees?: number;
    /**
    * Longitude direction.
    * Available values: "E", "W".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#long_direction DnsRecord#long_direction}
    */
    readonly longDirection?: string;
    /**
    * Minutes of longitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#long_minutes DnsRecord#long_minutes}
    */
    readonly longMinutes?: number;
    /**
    * Seconds of longitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#long_seconds DnsRecord#long_seconds}
    */
    readonly longSeconds?: number;
    /**
    * Matching Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#matching_type DnsRecord#matching_type}
    */
    readonly matchingType?: number;
    /**
    * Order.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#order DnsRecord#order}
    */
    readonly order?: number;
    /**
    * The port of the service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#port DnsRecord#port}
    */
    readonly port?: number;
    /**
    * Horizontal precision of location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#precision_horz DnsRecord#precision_horz}
    */
    readonly precisionHorz?: number;
    /**
    * Vertical precision of location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#precision_vert DnsRecord#precision_vert}
    */
    readonly precisionVert?: number;
    /**
    * Preference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#preference DnsRecord#preference}
    */
    readonly preference?: number;
    /**
    * Priority.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#priority DnsRecord#priority}
    */
    readonly priority?: number;
    /**
    * Protocol.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#protocol DnsRecord#protocol}
    */
    readonly protocol?: number;
    /**
    * Public Key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#public_key DnsRecord#public_key}
    */
    readonly publicKey?: string;
    /**
    * Regex.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#regex DnsRecord#regex}
    */
    readonly regex?: string;
    /**
    * Replacement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#replacement DnsRecord#replacement}
    */
    readonly replacement?: string;
    /**
    * Selector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#selector DnsRecord#selector}
    */
    readonly selector?: number;
    /**
    * Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#service DnsRecord#service}
    */
    readonly service?: string;
    /**
    * Size of location in meters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#size DnsRecord#size}
    */
    readonly size?: number;
    /**
    * Name of the property controlled by this record (e.g.: issue, issuewild, iodef).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#tag DnsRecord#tag}
    */
    readonly tag?: string;
    /**
    * Target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#target DnsRecord#target}
    */
    readonly target?: string;
    /**
    * Type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#type DnsRecord#type}
    */
    readonly type?: number;
    /**
    * Usage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#usage DnsRecord#usage}
    */
    readonly usage?: number;
    /**
    * Value of the record. This field's semantics depend on the chosen tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#value DnsRecord#value}
    */
    readonly value?: string;
    /**
    * The record weight.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#weight DnsRecord#weight}
    */
    readonly weight?: number;
}
export declare function dnsRecordDataToTerraform(struct?: DnsRecordData | cdktf.IResolvable): any;
export declare function dnsRecordDataToHclTerraform(struct?: DnsRecordData | cdktf.IResolvable): any;
export declare class DnsRecordDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DnsRecordData | cdktf.IResolvable | undefined;
    set internalValue(value: DnsRecordData | cdktf.IResolvable | undefined);
    private _algorithm?;
    get algorithm(): number;
    set algorithm(value: number);
    resetAlgorithm(): void;
    get algorithmInput(): number;
    private _altitude?;
    get altitude(): number;
    set altitude(value: number);
    resetAltitude(): void;
    get altitudeInput(): number;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string;
    private _digest?;
    get digest(): string;
    set digest(value: string);
    resetDigest(): void;
    get digestInput(): string;
    private _digestType?;
    get digestType(): number;
    set digestType(value: number);
    resetDigestType(): void;
    get digestTypeInput(): number;
    private _fingerprint?;
    get fingerprint(): string;
    set fingerprint(value: string);
    resetFingerprint(): void;
    get fingerprintInput(): string;
    private _flags?;
    get flags(): {
        [key: string]: any;
    };
    set flags(value: {
        [key: string]: any;
    });
    resetFlags(): void;
    get flagsInput(): {
        [key: string]: any;
    };
    private _keyTag?;
    get keyTag(): number;
    set keyTag(value: number);
    resetKeyTag(): void;
    get keyTagInput(): number;
    private _latDegrees?;
    get latDegrees(): number;
    set latDegrees(value: number);
    resetLatDegrees(): void;
    get latDegreesInput(): number;
    private _latDirection?;
    get latDirection(): string;
    set latDirection(value: string);
    resetLatDirection(): void;
    get latDirectionInput(): string;
    private _latMinutes?;
    get latMinutes(): number;
    set latMinutes(value: number);
    resetLatMinutes(): void;
    get latMinutesInput(): number;
    private _latSeconds?;
    get latSeconds(): number;
    set latSeconds(value: number);
    resetLatSeconds(): void;
    get latSecondsInput(): number;
    private _longDegrees?;
    get longDegrees(): number;
    set longDegrees(value: number);
    resetLongDegrees(): void;
    get longDegreesInput(): number;
    private _longDirection?;
    get longDirection(): string;
    set longDirection(value: string);
    resetLongDirection(): void;
    get longDirectionInput(): string;
    private _longMinutes?;
    get longMinutes(): number;
    set longMinutes(value: number);
    resetLongMinutes(): void;
    get longMinutesInput(): number;
    private _longSeconds?;
    get longSeconds(): number;
    set longSeconds(value: number);
    resetLongSeconds(): void;
    get longSecondsInput(): number;
    private _matchingType?;
    get matchingType(): number;
    set matchingType(value: number);
    resetMatchingType(): void;
    get matchingTypeInput(): number;
    private _order?;
    get order(): number;
    set order(value: number);
    resetOrder(): void;
    get orderInput(): number;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _precisionHorz?;
    get precisionHorz(): number;
    set precisionHorz(value: number);
    resetPrecisionHorz(): void;
    get precisionHorzInput(): number;
    private _precisionVert?;
    get precisionVert(): number;
    set precisionVert(value: number);
    resetPrecisionVert(): void;
    get precisionVertInput(): number;
    private _preference?;
    get preference(): number;
    set preference(value: number);
    resetPreference(): void;
    get preferenceInput(): number;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _protocol?;
    get protocol(): number;
    set protocol(value: number);
    resetProtocol(): void;
    get protocolInput(): number;
    private _publicKey?;
    get publicKey(): string;
    set publicKey(value: string);
    resetPublicKey(): void;
    get publicKeyInput(): string;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string;
    private _replacement?;
    get replacement(): string;
    set replacement(value: string);
    resetReplacement(): void;
    get replacementInput(): string;
    private _selector?;
    get selector(): number;
    set selector(value: number);
    resetSelector(): void;
    get selectorInput(): number;
    private _service?;
    get service(): string;
    set service(value: string);
    resetService(): void;
    get serviceInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    resetSize(): void;
    get sizeInput(): number;
    private _tag?;
    get tag(): string;
    set tag(value: string);
    resetTag(): void;
    get tagInput(): string;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string;
    private _type?;
    get type(): number;
    set type(value: number);
    resetType(): void;
    get typeInput(): number;
    private _usage?;
    get usage(): number;
    set usage(value: number);
    resetUsage(): void;
    get usageInput(): number;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number;
}
export interface DnsRecordSettings {
    /**
    * If enabled, causes the CNAME record to be resolved externally and the resulting address records (e.g., A and AAAA) to be returned instead of the CNAME record itself. This setting is unavailable for proxied records, since they are always flattened.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#flatten_cname DnsRecord#flatten_cname}
    */
    readonly flattenCname?: boolean | cdktf.IResolvable;
    /**
    * When enabled, only A records will be generated, and AAAA records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#ipv4_only DnsRecord#ipv4_only}
    */
    readonly ipv4Only?: boolean | cdktf.IResolvable;
    /**
    * When enabled, only AAAA records will be generated, and A records will not be created. This setting is intended for exceptional cases. Note that this option only applies to proxied records and it has no effect on whether Cloudflare communicates with the origin using IPv4 or IPv6.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#ipv6_only DnsRecord#ipv6_only}
    */
    readonly ipv6Only?: boolean | cdktf.IResolvable;
}
export declare function dnsRecordSettingsToTerraform(struct?: DnsRecordSettings | cdktf.IResolvable): any;
export declare function dnsRecordSettingsToHclTerraform(struct?: DnsRecordSettings | cdktf.IResolvable): any;
export declare class DnsRecordSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DnsRecordSettings | cdktf.IResolvable | undefined;
    set internalValue(value: DnsRecordSettings | cdktf.IResolvable | undefined);
    private _flattenCname?;
    get flattenCname(): boolean | cdktf.IResolvable;
    set flattenCname(value: boolean | cdktf.IResolvable);
    resetFlattenCname(): void;
    get flattenCnameInput(): any;
    private _ipv4Only?;
    get ipv4Only(): boolean | cdktf.IResolvable;
    set ipv4Only(value: boolean | cdktf.IResolvable);
    resetIpv4Only(): void;
    get ipv4OnlyInput(): any;
    private _ipv6Only?;
    get ipv6Only(): boolean | cdktf.IResolvable;
    set ipv6Only(value: boolean | cdktf.IResolvable);
    resetIpv6Only(): void;
    get ipv6OnlyInput(): any;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record cloudflare_dns_record}
*/
export declare class DnsRecord extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_dns_record";
    /**
    * Generates CDKTF code for importing a DnsRecord resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DnsRecord to import
    * @param importFromId The id of the existing DnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DnsRecord to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/dns_record cloudflare_dns_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DnsRecordConfig
    */
    constructor(scope: Construct, id: string, config: DnsRecordConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string;
    get commentModifiedOn(): any;
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
    get createdOn(): any;
    private _data;
    get data(): DnsRecordDataOutputReference;
    putData(value: DnsRecordData): void;
    resetData(): void;
    get dataInput(): any;
    get id(): any;
    get meta(): any;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number;
    private _privateRouting?;
    get privateRouting(): boolean | cdktf.IResolvable;
    set privateRouting(value: boolean | cdktf.IResolvable);
    resetPrivateRouting(): void;
    get privateRoutingInput(): any;
    get proxiable(): any;
    private _proxied?;
    get proxied(): boolean | cdktf.IResolvable;
    set proxied(value: boolean | cdktf.IResolvable);
    resetProxied(): void;
    get proxiedInput(): any;
    private _settings;
    get settings(): DnsRecordSettingsOutputReference;
    putSettings(value: DnsRecordSettings): void;
    resetSettings(): void;
    get settingsInput(): any;
    private _tags?;
    get tags(): string[];
    set tags(value: string[]);
    resetTags(): void;
    get tagsInput(): string[];
    get tagsModifiedOn(): any;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    get ttlInput(): number;
    private _type?;
    get type(): string;
    set type(value: string);
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
