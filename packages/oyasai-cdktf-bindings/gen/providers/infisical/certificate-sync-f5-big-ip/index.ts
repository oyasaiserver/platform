// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncF5BigIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#application_id CertificateSyncF5BigIp#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#auto_sync_enabled CertificateSyncF5BigIp#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#certificate_filters CertificateSyncF5BigIp#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncF5BigIpCertificateFilters;
  /**
  * The ID of the f5-big-ip Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#connection_id CertificateSyncF5BigIp#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the F5 BIG-IP sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#description CertificateSyncF5BigIp#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#destination_config CertificateSyncF5BigIp#destination_config}
  */
  readonly destinationConfig: CertificateSyncF5BigIpDestinationConfig;
  /**
  * The name of the F5 BIG-IP sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#name CertificateSyncF5BigIp#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#sync_options CertificateSyncF5BigIp#sync_options}
  */
  readonly syncOptions: CertificateSyncF5BigIpSyncOptions;
}
export interface CertificateSyncF5BigIpCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#key CertificateSyncF5BigIp#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#value CertificateSyncF5BigIp#value}
  */
  readonly value?: string;
}

export function certificateSyncF5BigIpCertificateFiltersMetadataToTerraform(struct?: CertificateSyncF5BigIpCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncF5BigIpCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncF5BigIpCertificateFiltersMetadata | cdktf.IResolvable): any {
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

export class CertificateSyncF5BigIpCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateSyncF5BigIpCertificateFiltersMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncF5BigIpCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
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

export class CertificateSyncF5BigIpCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncF5BigIpCertificateFiltersMetadata[] | cdktf.IResolvable

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
  public get(index: number): CertificateSyncF5BigIpCertificateFiltersMetadataOutputReference {
    return new CertificateSyncF5BigIpCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncF5BigIpCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#certificate_order_ids CertificateSyncF5BigIp#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#metadata CertificateSyncF5BigIp#metadata}
  */
  readonly metadata?: CertificateSyncF5BigIpCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#profile_ids CertificateSyncF5BigIp#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncF5BigIpCertificateFiltersToTerraform(struct?: CertificateSyncF5BigIpCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncF5BigIpCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncF5BigIpCertificateFiltersToHclTerraform(struct?: CertificateSyncF5BigIpCertificateFilters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(certificateSyncF5BigIpCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncF5BigIpCertificateFiltersMetadataList",
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

export class CertificateSyncF5BigIpCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncF5BigIpCertificateFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncF5BigIpCertificateFilters | cdktf.IResolvable | undefined) {
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
  private _metadata = new CertificateSyncF5BigIpCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncF5BigIpCertificateFiltersMetadata[] | cdktf.IResolvable) {
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
export interface CertificateSyncF5BigIpDestinationConfig {
  /**
  * Whether to create the SSL profile when it does not exist. Only applies when `profile_type` is `client-ssl` or `server-ssl`. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#create_profile_if_missing CertificateSyncF5BigIp#create_profile_if_missing}
  */
  readonly createProfileIfMissing?: boolean | cdktf.IResolvable;
  /**
  * The parent profile a newly created SSL profile inherits from. Only allowed when `create_profile_if_missing` is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#parent_profile CertificateSyncF5BigIp#parent_profile}
  */
  readonly parentProfile?: string;
  /**
  * The F5 BIG-IP partition to sync certificates to. Defaults to the `Common` partition when unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#partition CertificateSyncF5BigIp#partition}
  */
  readonly partition?: string;
  /**
  * The name of the SSL profile to bind synced certificates to. Required when `profile_type` is `client-ssl` or `server-ssl`, and not allowed otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#profile_name CertificateSyncF5BigIp#profile_name}
  */
  readonly profileName?: string;
  /**
  * The type of SSL profile to bind synced certificates to. Supported values: `none`, `client-ssl`, `server-ssl`. Leave unset or set to `none` to sync certificates without binding them to a profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#profile_type CertificateSyncF5BigIp#profile_type}
  */
  readonly profileType?: string;
}

export function certificateSyncF5BigIpDestinationConfigToTerraform(struct?: CertificateSyncF5BigIpDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_profile_if_missing: cdktf.booleanToTerraform(struct!.createProfileIfMissing),
    parent_profile: cdktf.stringToTerraform(struct!.parentProfile),
    partition: cdktf.stringToTerraform(struct!.partition),
    profile_name: cdktf.stringToTerraform(struct!.profileName),
    profile_type: cdktf.stringToTerraform(struct!.profileType),
  }
}


export function certificateSyncF5BigIpDestinationConfigToHclTerraform(struct?: CertificateSyncF5BigIpDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_profile_if_missing: {
      value: cdktf.booleanToHclTerraform(struct!.createProfileIfMissing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parent_profile: {
      value: cdktf.stringToHclTerraform(struct!.parentProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_name: {
      value: cdktf.stringToHclTerraform(struct!.profileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_type: {
      value: cdktf.stringToHclTerraform(struct!.profileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncF5BigIpDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncF5BigIpDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createProfileIfMissing !== undefined) {
      hasAnyValues = true;
      internalValueResult.createProfileIfMissing = this._createProfileIfMissing;
    }
    if (this._parentProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentProfile = this._parentProfile;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._profileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileName = this._profileName;
    }
    if (this._profileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileType = this._profileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncF5BigIpDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createProfileIfMissing = undefined;
      this._parentProfile = undefined;
      this._partition = undefined;
      this._profileName = undefined;
      this._profileType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createProfileIfMissing = value.createProfileIfMissing;
      this._parentProfile = value.parentProfile;
      this._partition = value.partition;
      this._profileName = value.profileName;
      this._profileType = value.profileType;
    }
  }

  // create_profile_if_missing - computed: true, optional: true, required: false
  private _createProfileIfMissing?: boolean | cdktf.IResolvable; 
  public get createProfileIfMissing() {
    return this.getBooleanAttribute('create_profile_if_missing');
  }
  public set createProfileIfMissing(value: boolean | cdktf.IResolvable) {
    this._createProfileIfMissing = value;
  }
  public resetCreateProfileIfMissing() {
    this._createProfileIfMissing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createProfileIfMissingInput() {
    return this._createProfileIfMissing;
  }

  // parent_profile - computed: false, optional: true, required: false
  private _parentProfile?: string; 
  public get parentProfile() {
    return this.getStringAttribute('parent_profile');
  }
  public set parentProfile(value: string) {
    this._parentProfile = value;
  }
  public resetParentProfile() {
    this._parentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProfileInput() {
    return this._parentProfile;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // profile_name - computed: false, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_type - computed: false, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }
}
export interface CertificateSyncF5BigIpSyncOptions {
  /**
  * Whether Infisical should remove certificates from F5 BIG-IP when their certificates leave this sync, for example when `certificate_filters` stops matching them. Destroying the sync leaves them in place. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#can_remove_certificates CertificateSyncF5BigIp#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The naming scheme for synced certificates, which must compile to 1-255 alphanumeric characters, hyphens, underscores, or periods. Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}. A schema with no placeholder can be linked to only one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#certificate_name_schema CertificateSyncF5BigIp#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
  /**
  * Whether to include the root CA certificate in the synced certificate chain. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#include_root_ca CertificateSyncF5BigIp#include_root_ca}
  */
  readonly includeRootCa?: boolean | cdktf.IResolvable;
  /**
  * Whether a renewed certificate replaces its existing F5 BIG-IP certificate instead of creating a new one. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#preserve_item_on_renewal CertificateSyncF5BigIp#preserve_item_on_renewal}
  */
  readonly preserveItemOnRenewal?: boolean | cdktf.IResolvable;
}

export function certificateSyncF5BigIpSyncOptionsToTerraform(struct?: CertificateSyncF5BigIpSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
    include_root_ca: cdktf.booleanToTerraform(struct!.includeRootCa),
    preserve_item_on_renewal: cdktf.booleanToTerraform(struct!.preserveItemOnRenewal),
  }
}


export function certificateSyncF5BigIpSyncOptionsToHclTerraform(struct?: CertificateSyncF5BigIpSyncOptions | cdktf.IResolvable): any {
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
    include_root_ca: {
      value: cdktf.booleanToHclTerraform(struct!.includeRootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_item_on_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.preserveItemOnRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncF5BigIpSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncF5BigIpSyncOptions | cdktf.IResolvable | undefined {
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
    if (this._includeRootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRootCa = this._includeRootCa;
    }
    if (this._preserveItemOnRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveItemOnRenewal = this._preserveItemOnRenewal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncF5BigIpSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
      this._includeRootCa = undefined;
      this._preserveItemOnRenewal = undefined;
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
      this._includeRootCa = value.includeRootCa;
      this._preserveItemOnRenewal = value.preserveItemOnRenewal;
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

  // include_root_ca - computed: true, optional: true, required: false
  private _includeRootCa?: boolean | cdktf.IResolvable; 
  public get includeRootCa() {
    return this.getBooleanAttribute('include_root_ca');
  }
  public set includeRootCa(value: boolean | cdktf.IResolvable) {
    this._includeRootCa = value;
  }
  public resetIncludeRootCa() {
    this._includeRootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRootCaInput() {
    return this._includeRootCa;
  }

  // preserve_item_on_renewal - computed: true, optional: true, required: false
  private _preserveItemOnRenewal?: boolean | cdktf.IResolvable; 
  public get preserveItemOnRenewal() {
    return this.getBooleanAttribute('preserve_item_on_renewal');
  }
  public set preserveItemOnRenewal(value: boolean | cdktf.IResolvable) {
    this._preserveItemOnRenewal = value;
  }
  public resetPreserveItemOnRenewal() {
    this._preserveItemOnRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveItemOnRenewalInput() {
    return this._preserveItemOnRenewal;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip infisical_certificate_sync_f5_big_ip}
*/
export class CertificateSyncF5BigIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_f5_big_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncF5BigIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncF5BigIp to import
  * @param importFromId The id of the existing CertificateSyncF5BigIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncF5BigIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_f5_big_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_f5_big_ip infisical_certificate_sync_f5_big_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncF5BigIpConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncF5BigIpConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_f5_big_ip',
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
  private _certificateFilters = new CertificateSyncF5BigIpCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncF5BigIpCertificateFilters) {
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
  private _destinationConfig = new CertificateSyncF5BigIpDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncF5BigIpDestinationConfig) {
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
  private _syncOptions = new CertificateSyncF5BigIpSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncF5BigIpSyncOptions) {
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
      certificate_filters: certificateSyncF5BigIpCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncF5BigIpDestinationConfigToTerraform(this._destinationConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncF5BigIpSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: certificateSyncF5BigIpCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncF5BigIpCertificateFilters",
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
        value: certificateSyncF5BigIpDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncF5BigIpDestinationConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncF5BigIpSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncF5BigIpSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
