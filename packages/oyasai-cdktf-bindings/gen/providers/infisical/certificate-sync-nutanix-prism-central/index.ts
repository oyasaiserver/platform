// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncNutanixPrismCentralConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#application_id CertificateSyncNutanixPrismCentral#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#auto_sync_enabled CertificateSyncNutanixPrismCentral#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#certificate_filters CertificateSyncNutanixPrismCentral#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncNutanixPrismCentralCertificateFilters;
  /**
  * The ID of the nutanix-prism-central Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#connection_id CertificateSyncNutanixPrismCentral#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Nutanix Prism Central sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#description CertificateSyncNutanixPrismCentral#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#destination_config CertificateSyncNutanixPrismCentral#destination_config}
  */
  readonly destinationConfig: CertificateSyncNutanixPrismCentralDestinationConfig;
  /**
  * The name of the Nutanix Prism Central sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#name CertificateSyncNutanixPrismCentral#name}
  */
  readonly name: string;
}
export interface CertificateSyncNutanixPrismCentralCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#key CertificateSyncNutanixPrismCentral#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#value CertificateSyncNutanixPrismCentral#value}
  */
  readonly value?: string;
}

export function certificateSyncNutanixPrismCentralCertificateFiltersMetadataToTerraform(struct?: CertificateSyncNutanixPrismCentralCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncNutanixPrismCentralCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncNutanixPrismCentralCertificateFiltersMetadata | cdktf.IResolvable): any {
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

export class CertificateSyncNutanixPrismCentralCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateSyncNutanixPrismCentralCertificateFiltersMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncNutanixPrismCentralCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
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

export class CertificateSyncNutanixPrismCentralCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncNutanixPrismCentralCertificateFiltersMetadata[] | cdktf.IResolvable

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
  public get(index: number): CertificateSyncNutanixPrismCentralCertificateFiltersMetadataOutputReference {
    return new CertificateSyncNutanixPrismCentralCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncNutanixPrismCentralCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#certificate_order_ids CertificateSyncNutanixPrismCentral#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#metadata CertificateSyncNutanixPrismCentral#metadata}
  */
  readonly metadata?: CertificateSyncNutanixPrismCentralCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#profile_ids CertificateSyncNutanixPrismCentral#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncNutanixPrismCentralCertificateFiltersToTerraform(struct?: CertificateSyncNutanixPrismCentralCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncNutanixPrismCentralCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncNutanixPrismCentralCertificateFiltersToHclTerraform(struct?: CertificateSyncNutanixPrismCentralCertificateFilters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(certificateSyncNutanixPrismCentralCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncNutanixPrismCentralCertificateFiltersMetadataList",
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

export class CertificateSyncNutanixPrismCentralCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncNutanixPrismCentralCertificateFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncNutanixPrismCentralCertificateFilters | cdktf.IResolvable | undefined) {
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
  private _metadata = new CertificateSyncNutanixPrismCentralCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncNutanixPrismCentralCertificateFiltersMetadata[] | cdktf.IResolvable) {
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
export interface CertificateSyncNutanixPrismCentralDestinationConfig {
  /**
  * The ID of the Nutanix cluster to install the certificate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#cluster_id CertificateSyncNutanixPrismCentral#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The name of the Nutanix cluster to install the certificate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#cluster_name CertificateSyncNutanixPrismCentral#cluster_name}
  */
  readonly clusterName: string;
}

export function certificateSyncNutanixPrismCentralDestinationConfigToTerraform(struct?: CertificateSyncNutanixPrismCentralDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
  }
}


export function certificateSyncNutanixPrismCentralDestinationConfigToHclTerraform(struct?: CertificateSyncNutanixPrismCentralDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncNutanixPrismCentralDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncNutanixPrismCentralDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncNutanixPrismCentralDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._clusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._clusterName = value.clusterName;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central infisical_certificate_sync_nutanix_prism_central}
*/
export class CertificateSyncNutanixPrismCentral extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_nutanix_prism_central";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncNutanixPrismCentral resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncNutanixPrismCentral to import
  * @param importFromId The id of the existing CertificateSyncNutanixPrismCentral that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncNutanixPrismCentral to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_nutanix_prism_central", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_nutanix_prism_central infisical_certificate_sync_nutanix_prism_central} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncNutanixPrismCentralConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncNutanixPrismCentralConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_nutanix_prism_central',
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
  private _certificateFilters = new CertificateSyncNutanixPrismCentralCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncNutanixPrismCentralCertificateFilters) {
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
  private _destinationConfig = new CertificateSyncNutanixPrismCentralDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncNutanixPrismCentralDestinationConfig) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      auto_sync_enabled: cdktf.booleanToTerraform(this._autoSyncEnabled),
      certificate_filters: certificateSyncNutanixPrismCentralCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncNutanixPrismCentralDestinationConfigToTerraform(this._destinationConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
        value: certificateSyncNutanixPrismCentralCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncNutanixPrismCentralCertificateFilters",
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
        value: certificateSyncNutanixPrismCentralDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncNutanixPrismCentralDestinationConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
