import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CertManagerCertificatePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * The description of the certificate policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#description CertManagerCertificatePolicy#description}
    */
    readonly description?: string;
    /**
    * The name of the certificate policy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#name CertManagerCertificatePolicy#name}
    */
    readonly name: string;
    /**
    * The slug of the cert-manager project
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#project_slug CertManagerCertificatePolicy#project_slug}
    */
    readonly projectSlug: string;
    /**
    * algorithms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#algorithms CertManagerCertificatePolicy#algorithms}
    */
    readonly algorithms: CertManagerCertificatePolicyAlgorithms;
    /**
    * extended_key_usages block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#extended_key_usages CertManagerCertificatePolicy#extended_key_usages}
    */
    readonly extendedKeyUsages?: CertManagerCertificatePolicyExtendedKeyUsages;
    /**
    * key_usages block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#key_usages CertManagerCertificatePolicy#key_usages}
    */
    readonly keyUsages?: CertManagerCertificatePolicyKeyUsages;
    /**
    * sans block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#sans CertManagerCertificatePolicy#sans}
    */
    readonly sans?: CertManagerCertificatePolicySans[] | cdktf.IResolvable;
    /**
    * subject block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#subject CertManagerCertificatePolicy#subject}
    */
    readonly subject?: CertManagerCertificatePolicySubject[] | cdktf.IResolvable;
    /**
    * validity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#validity CertManagerCertificatePolicy#validity}
    */
    readonly validity?: CertManagerCertificatePolicyValidity;
}
export interface CertManagerCertificatePolicyAlgorithms {
    /**
    * List of allowed key algorithms (at least one required). Supported values: RSA-2048, RSA-3072, RSA-4096, ECDSA-P256, ECDSA-P521, ECDSA-P384
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#key_algorithm CertManagerCertificatePolicy#key_algorithm}
    */
    readonly keyAlgorithm: string[];
    /**
    * List of allowed signature algorithms (at least one required). Supported values: SHA256-RSA, SHA512-RSA, SHA384-ECDSA, SHA384-RSA, SHA256-ECDSA, SHA512-ECDSA
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#signature CertManagerCertificatePolicy#signature}
    */
    readonly signature: string[];
}
export declare function certManagerCertificatePolicyAlgorithmsToTerraform(struct?: CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable): any;
export declare function certManagerCertificatePolicyAlgorithmsToHclTerraform(struct?: CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable): any;
export declare class CertManagerCertificatePolicyAlgorithmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificatePolicyAlgorithms | cdktf.IResolvable | undefined);
    private _keyAlgorithm?;
    get keyAlgorithm(): string[];
    set keyAlgorithm(value: string[]);
    get keyAlgorithmInput(): string[];
    private _signature?;
    get signature(): string[];
    set signature(value: string[]);
    get signatureInput(): string[];
}
export interface CertManagerCertificatePolicyExtendedKeyUsages {
    /**
    * List of allowed extended key usages. Possible values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
    */
    readonly allowed?: string[];
    /**
    * List of denied extended key usages. Possible values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
    */
    readonly denied?: string[];
    /**
    * List of required extended key usages. Possible values: client_auth, server_auth, code_signing, email_protection, ocsp_signing, time_stamping
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
    */
    readonly required?: string[];
}
export declare function certManagerCertificatePolicyExtendedKeyUsagesToTerraform(struct?: CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable): any;
export declare function certManagerCertificatePolicyExtendedKeyUsagesToHclTerraform(struct?: CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable): any;
export declare class CertManagerCertificatePolicyExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificatePolicyExtendedKeyUsages | cdktf.IResolvable | undefined);
    private _allowed?;
    get allowed(): string[];
    set allowed(value: string[]);
    resetAllowed(): void;
    get allowedInput(): string[];
    private _denied?;
    get denied(): string[];
    set denied(value: string[]);
    resetDenied(): void;
    get deniedInput(): string[];
    private _required?;
    get required(): string[];
    set required(value: string[]);
    resetRequired(): void;
    get requiredInput(): string[];
}
export interface CertManagerCertificatePolicyKeyUsages {
    /**
    * List of allowed key usages. Possible values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
    */
    readonly allowed?: string[];
    /**
    * List of denied key usages. Possible values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
    */
    readonly denied?: string[];
    /**
    * List of required key usages. Possible values: digital_signature, key_encipherment, non_repudiation, data_encipherment, key_agreement, key_cert_sign, crl_sign, encipher_only, decipher_only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
    */
    readonly required?: string[];
}
export declare function certManagerCertificatePolicyKeyUsagesToTerraform(struct?: CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable): any;
export declare function certManagerCertificatePolicyKeyUsagesToHclTerraform(struct?: CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable): any;
export declare class CertManagerCertificatePolicyKeyUsagesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificatePolicyKeyUsages | cdktf.IResolvable | undefined);
    private _allowed?;
    get allowed(): string[];
    set allowed(value: string[]);
    resetAllowed(): void;
    get allowedInput(): string[];
    private _denied?;
    get denied(): string[];
    set denied(value: string[]);
    resetDenied(): void;
    get deniedInput(): string[];
    private _required?;
    get required(): string[];
    set required(value: string[]);
    resetRequired(): void;
    get requiredInput(): string[];
}
export interface CertManagerCertificatePolicySans {
    /**
    * List of allowed values for this SAN type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
    */
    readonly allowed?: string[];
    /**
    * List of denied values for this SAN type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
    */
    readonly denied?: string[];
    /**
    * List of required values for this SAN type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
    */
    readonly required?: string[];
    /**
    * The SAN type. Possible values: dns_name, ip_address, email, uri
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#type CertManagerCertificatePolicy#type}
    */
    readonly type: string;
}
export declare function certManagerCertificatePolicySansToTerraform(struct?: CertManagerCertificatePolicySans | cdktf.IResolvable): any;
export declare function certManagerCertificatePolicySansToHclTerraform(struct?: CertManagerCertificatePolicySans | cdktf.IResolvable): any;
export declare class CertManagerCertificatePolicySansOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CertManagerCertificatePolicySans | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificatePolicySans | cdktf.IResolvable | undefined);
    private _allowed?;
    get allowed(): string[];
    set allowed(value: string[]);
    resetAllowed(): void;
    get allowedInput(): string[];
    private _denied?;
    get denied(): string[];
    set denied(value: string[]);
    resetDenied(): void;
    get deniedInput(): string[];
    private _required?;
    get required(): string[];
    set required(value: string[]);
    resetRequired(): void;
    get requiredInput(): string[];
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export declare class CertManagerCertificatePolicySansList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CertManagerCertificatePolicySans[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CertManagerCertificatePolicySansOutputReference;
}
export interface CertManagerCertificatePolicySubject {
    /**
    * List of allowed values for this subject attribute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#allowed CertManagerCertificatePolicy#allowed}
    */
    readonly allowed?: string[];
    /**
    * List of denied values for this subject attribute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#denied CertManagerCertificatePolicy#denied}
    */
    readonly denied?: string[];
    /**
    * List of required values for this subject attribute
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#required CertManagerCertificatePolicy#required}
    */
    readonly required?: string[];
    /**
    * The subject attribute type. Possible values: common_name, organization, country
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#type CertManagerCertificatePolicy#type}
    */
    readonly type: string;
}
export declare function certManagerCertificatePolicySubjectToTerraform(struct?: CertManagerCertificatePolicySubject | cdktf.IResolvable): any;
export declare function certManagerCertificatePolicySubjectToHclTerraform(struct?: CertManagerCertificatePolicySubject | cdktf.IResolvable): any;
export declare class CertManagerCertificatePolicySubjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CertManagerCertificatePolicySubject | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificatePolicySubject | cdktf.IResolvable | undefined);
    private _allowed?;
    get allowed(): string[];
    set allowed(value: string[]);
    resetAllowed(): void;
    get allowedInput(): string[];
    private _denied?;
    get denied(): string[];
    set denied(value: string[]);
    resetDenied(): void;
    get deniedInput(): string[];
    private _required?;
    get required(): string[];
    set required(value: string[]);
    resetRequired(): void;
    get requiredInput(): string[];
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
}
export declare class CertManagerCertificatePolicySubjectList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CertManagerCertificatePolicySubject[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CertManagerCertificatePolicySubjectOutputReference;
}
export interface CertManagerCertificatePolicyValidity {
    /**
    * Maximum validity period (e.g., '90d', '2y', '6m')
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#max CertManagerCertificatePolicy#max}
    */
    readonly max?: string;
}
export declare function certManagerCertificatePolicyValidityToTerraform(struct?: CertManagerCertificatePolicyValidity | cdktf.IResolvable): any;
export declare function certManagerCertificatePolicyValidityToHclTerraform(struct?: CertManagerCertificatePolicyValidity | cdktf.IResolvable): any;
export declare class CertManagerCertificatePolicyValidityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CertManagerCertificatePolicyValidity | cdktf.IResolvable | undefined;
    set internalValue(value: CertManagerCertificatePolicyValidity | cdktf.IResolvable | undefined);
    private _max?;
    get max(): string;
    set max(value: string);
    resetMax(): void;
    get maxInput(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy}
*/
export declare class CertManagerCertificatePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "infisical_cert_manager_certificate_policy";
    /**
    * Generates CDKTF code for importing a CertManagerCertificatePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CertManagerCertificatePolicy to import
    * @param importFromId The id of the existing CertManagerCertificatePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CertManagerCertificatePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.16.18/docs/resources/cert_manager_certificate_policy infisical_cert_manager_certificate_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CertManagerCertificatePolicyConfig
    */
    constructor(scope: Construct, id: string, config: CertManagerCertificatePolicyConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _projectSlug?;
    get projectSlug(): string;
    set projectSlug(value: string);
    get projectSlugInput(): string;
    private _algorithms;
    get algorithms(): CertManagerCertificatePolicyAlgorithmsOutputReference;
    putAlgorithms(value: CertManagerCertificatePolicyAlgorithms): void;
    get algorithmsInput(): any;
    private _extendedKeyUsages;
    get extendedKeyUsages(): CertManagerCertificatePolicyExtendedKeyUsagesOutputReference;
    putExtendedKeyUsages(value: CertManagerCertificatePolicyExtendedKeyUsages): void;
    resetExtendedKeyUsages(): void;
    get extendedKeyUsagesInput(): any;
    private _keyUsages;
    get keyUsages(): CertManagerCertificatePolicyKeyUsagesOutputReference;
    putKeyUsages(value: CertManagerCertificatePolicyKeyUsages): void;
    resetKeyUsages(): void;
    get keyUsagesInput(): any;
    private _sans;
    get sans(): CertManagerCertificatePolicySansList;
    putSans(value: CertManagerCertificatePolicySans[] | cdktf.IResolvable): void;
    resetSans(): void;
    get sansInput(): any;
    private _subject;
    get subject(): CertManagerCertificatePolicySubjectList;
    putSubject(value: CertManagerCertificatePolicySubject[] | cdktf.IResolvable): void;
    resetSubject(): void;
    get subjectInput(): any;
    private _validity;
    get validity(): CertManagerCertificatePolicyValidityOutputReference;
    putValidity(value: CertManagerCertificatePolicyValidity): void;
    resetValidity(): void;
    get validityInput(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
