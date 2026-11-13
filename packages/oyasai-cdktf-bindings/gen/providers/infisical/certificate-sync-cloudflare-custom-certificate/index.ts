// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncCloudflareCustomCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#application_id CertificateSyncCloudflareCustomCertificate#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#auto_sync_enabled CertificateSyncCloudflareCustomCertificate#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#certificate_filters CertificateSyncCloudflareCustomCertificate#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncCloudflareCustomCertificateCertificateFilters;
  /**
  * The ID of the cloudflare Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#connection_id CertificateSyncCloudflareCustomCertificate#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Cloudflare Custom SSL Certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#description CertificateSyncCloudflareCustomCertificate#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#destination_config CertificateSyncCloudflareCustomCertificate#destination_config}
  */
  readonly destinationConfig: CertificateSyncCloudflareCustomCertificateDestinationConfig;
  /**
  * The name of the Cloudflare Custom SSL Certificate sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#name CertificateSyncCloudflareCustomCertificate#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#sync_options CertificateSyncCloudflareCustomCertificate#sync_options}
  */
  readonly syncOptions: CertificateSyncCloudflareCustomCertificateSyncOptions;
}
export interface CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#key CertificateSyncCloudflareCustomCertificate#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#value CertificateSyncCloudflareCustomCertificate#value}
  */
  readonly value?: string;
}

export function certificateSyncCloudflareCustomCertificateCertificateFiltersMetadataToTerraform(struct?: CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncCloudflareCustomCertificateCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadataOutputReference {
    return new CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncCloudflareCustomCertificateCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#certificate_order_ids CertificateSyncCloudflareCustomCertificate#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#metadata CertificateSyncCloudflareCustomCertificate#metadata}
  */
  readonly metadata?: CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#profile_ids CertificateSyncCloudflareCustomCertificate#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncCloudflareCustomCertificateCertificateFiltersToTerraform(struct?: CertificateSyncCloudflareCustomCertificateCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncCloudflareCustomCertificateCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncCloudflareCustomCertificateCertificateFiltersToHclTerraform(struct?: CertificateSyncCloudflareCustomCertificateCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_order_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateOrderIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    metadata: {
      value: cdktf.listMapperHcl(certificateSyncCloudflareCustomCertificateCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadataList",
    },
    profile_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.profileIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncCloudflareCustomCertificateCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncCloudflareCustomCertificateCertificateFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateOrderIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateOrderIds = this._certificateOrderIds;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._profileIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileIds = this._profileIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncCloudflareCustomCertificateCertificateFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateOrderIds = undefined;
      this._metadata.internalValue = undefined;
      this._profileIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateOrderIds = value.certificateOrderIds;
      this._metadata.internalValue = value.metadata;
      this._profileIds = value.profileIds;
    }
  }

  // certificate_order_ids - computed: false, optional: true, required: false
  private _certificateOrderIds?: string[]; 
  public get certificateOrderIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_order_ids'));
  }
  public set certificateOrderIds(value: string[]) {
    this._certificateOrderIds = value;
  }
  public resetCertificateOrderIds() {
    this._certificateOrderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateOrderIdsInput() {
    return this._certificateOrderIds;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncCloudflareCustomCertificateCertificateFiltersMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // profile_ids - computed: false, optional: true, required: false
  private _profileIds?: string[]; 
  public get profileIds() {
    return cdktf.Fn.tolist(this.getListAttribute('profile_ids'));
  }
  public set profileIds(value: string[]) {
    this._profileIds = value;
  }
  public resetProfileIds() {
    this._profileIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdsInput() {
    return this._profileIds;
  }
}
export interface CertificateSyncCloudflareCustomCertificateDestinationConfig {
  /**
  * The ID of the Cloudflare zone to upload custom SSL certificates to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#zone_id CertificateSyncCloudflareCustomCertificate#zone_id}
  */
  readonly zoneId: string;
}

export function certificateSyncCloudflareCustomCertificateDestinationConfigToTerraform(struct?: CertificateSyncCloudflareCustomCertificateDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function certificateSyncCloudflareCustomCertificateDestinationConfigToHclTerraform(struct?: CertificateSyncCloudflareCustomCertificateDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncCloudflareCustomCertificateDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncCloudflareCustomCertificateDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncCloudflareCustomCertificateDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._zoneId = value.zoneId;
    }
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}
export interface CertificateSyncCloudflareCustomCertificateSyncOptions {
  /**
  * Whether Infisical should remove custom certificates from Cloudflare when their certificates leave this sync, for example when `certificate_filters` stops matching them. Destroying the sync leaves them in place. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#can_remove_certificates CertificateSyncCloudflareCustomCertificate#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The naming scheme for synced certificates. Must include the {{certificateId}} or {{shortCertificateId}} placeholder, and compiled names may contain only alphanumeric characters, hyphens and underscores (1-255 characters). Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#certificate_name_schema CertificateSyncCloudflareCustomCertificate#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
}

export function certificateSyncCloudflareCustomCertificateSyncOptionsToTerraform(struct?: CertificateSyncCloudflareCustomCertificateSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
  }
}


export function certificateSyncCloudflareCustomCertificateSyncOptionsToHclTerraform(struct?: CertificateSyncCloudflareCustomCertificateSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_remove_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.canRemoveCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_name_schema: {
      value: cdktf.stringToHclTerraform(struct!.certificateNameSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncCloudflareCustomCertificateSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncCloudflareCustomCertificateSyncOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canRemoveCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.canRemoveCertificates = this._canRemoveCertificates;
    }
    if (this._certificateNameSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateNameSchema = this._certificateNameSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncCloudflareCustomCertificateSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = value.canRemoveCertificates;
      this._certificateNameSchema = value.certificateNameSchema;
    }
  }

  // can_remove_certificates - computed: true, optional: true, required: false
  private _canRemoveCertificates?: boolean | cdktf.IResolvable; 
  public get canRemoveCertificates() {
    return this.getBooleanAttribute('can_remove_certificates');
  }
  public set canRemoveCertificates(value: boolean | cdktf.IResolvable) {
    this._canRemoveCertificates = value;
  }
  public resetCanRemoveCertificates() {
    this._canRemoveCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canRemoveCertificatesInput() {
    return this._canRemoveCertificates;
  }

  // certificate_name_schema - computed: false, optional: false, required: true
  private _certificateNameSchema?: string; 
  public get certificateNameSchema() {
    return this.getStringAttribute('certificate_name_schema');
  }
  public set certificateNameSchema(value: string) {
    this._certificateNameSchema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameSchemaInput() {
    return this._certificateNameSchema;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate infisical_certificate_sync_cloudflare_custom_certificate}
*/
export class CertificateSyncCloudflareCustomCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_cloudflare_custom_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncCloudflareCustomCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncCloudflareCustomCertificate to import
  * @param importFromId The id of the existing CertificateSyncCloudflareCustomCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncCloudflareCustomCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_cloudflare_custom_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_cloudflare_custom_certificate infisical_certificate_sync_cloudflare_custom_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncCloudflareCustomCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncCloudflareCustomCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_cloudflare_custom_certificate',
      terraformGeneratorMetadata: {
        providerName: 'infisical',
        providerVersion: '0.20.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._autoSyncEnabled = config.autoSyncEnabled;
    this._certificateFilters.internalValue = config.certificateFilters;
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._name = config.name;
    this._syncOptions.internalValue = config.syncOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // auto_sync_enabled - computed: true, optional: true, required: false
  private _autoSyncEnabled?: boolean | cdktf.IResolvable; 
  public get autoSyncEnabled() {
    return this.getBooleanAttribute('auto_sync_enabled');
  }
  public set autoSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._autoSyncEnabled = value;
  }
  public resetAutoSyncEnabled() {
    this._autoSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncEnabledInput() {
    return this._autoSyncEnabled;
  }

  // certificate_filters - computed: false, optional: true, required: false
  private _certificateFilters = new CertificateSyncCloudflareCustomCertificateCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncCloudflareCustomCertificateCertificateFilters) {
    this._certificateFilters.internalValue = value;
  }
  public resetCertificateFilters() {
    this._certificateFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFiltersInput() {
    return this._certificateFilters.internalValue;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new CertificateSyncCloudflareCustomCertificateDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncCloudflareCustomCertificateDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // sync_options - computed: false, optional: false, required: true
  private _syncOptions = new CertificateSyncCloudflareCustomCertificateSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncCloudflareCustomCertificateSyncOptions) {
    this._syncOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
      certificate_filters: certificateSyncCloudflareCustomCertificateCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncCloudflareCustomCertificateDestinationConfigToTerraform(this._destinationConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncCloudflareCustomCertificateSyncOptionsToTerraform(this._syncOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_filters: {
        value: certificateSyncCloudflareCustomCertificateCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncCloudflareCustomCertificateCertificateFilters",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_config: {
        value: certificateSyncCloudflareCustomCertificateDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncCloudflareCustomCertificateDestinationConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncCloudflareCustomCertificateSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncCloudflareCustomCertificateSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
