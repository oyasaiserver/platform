// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncGcpCertificateManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#application_id CertificateSyncGcpCertificateManager#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#auto_sync_enabled CertificateSyncGcpCertificateManager#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#certificate_filters CertificateSyncGcpCertificateManager#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncGcpCertificateManagerCertificateFilters;
  /**
  * The ID of the gcp Connection to use for syncing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#connection_id CertificateSyncGcpCertificateManager#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the GCP Certificate Manager sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#description CertificateSyncGcpCertificateManager#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#destination_config CertificateSyncGcpCertificateManager#destination_config}
  */
  readonly destinationConfig: CertificateSyncGcpCertificateManagerDestinationConfig;
  /**
  * The name of the GCP Certificate Manager sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#name CertificateSyncGcpCertificateManager#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#sync_options CertificateSyncGcpCertificateManager#sync_options}
  */
  readonly syncOptions: CertificateSyncGcpCertificateManagerSyncOptions;
}
export interface CertificateSyncGcpCertificateManagerCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#key CertificateSyncGcpCertificateManager#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#value CertificateSyncGcpCertificateManager#value}
  */
  readonly value?: string;
}

export function certificateSyncGcpCertificateManagerCertificateFiltersMetadataToTerraform(struct?: CertificateSyncGcpCertificateManagerCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncGcpCertificateManagerCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncGcpCertificateManagerCertificateFiltersMetadata | cdktf.IResolvable): any {
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

export class CertificateSyncGcpCertificateManagerCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateSyncGcpCertificateManagerCertificateFiltersMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncGcpCertificateManagerCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
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

export class CertificateSyncGcpCertificateManagerCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncGcpCertificateManagerCertificateFiltersMetadata[] | cdktf.IResolvable

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
  public get(index: number): CertificateSyncGcpCertificateManagerCertificateFiltersMetadataOutputReference {
    return new CertificateSyncGcpCertificateManagerCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncGcpCertificateManagerCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#certificate_order_ids CertificateSyncGcpCertificateManager#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#metadata CertificateSyncGcpCertificateManager#metadata}
  */
  readonly metadata?: CertificateSyncGcpCertificateManagerCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#profile_ids CertificateSyncGcpCertificateManager#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncGcpCertificateManagerCertificateFiltersToTerraform(struct?: CertificateSyncGcpCertificateManagerCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncGcpCertificateManagerCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncGcpCertificateManagerCertificateFiltersToHclTerraform(struct?: CertificateSyncGcpCertificateManagerCertificateFilters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(certificateSyncGcpCertificateManagerCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncGcpCertificateManagerCertificateFiltersMetadataList",
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

export class CertificateSyncGcpCertificateManagerCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncGcpCertificateManagerCertificateFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncGcpCertificateManagerCertificateFilters | cdktf.IResolvable | undefined) {
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
  private _metadata = new CertificateSyncGcpCertificateManagerCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncGcpCertificateManagerCertificateFiltersMetadata[] | cdktf.IResolvable) {
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
export interface CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding {
  /**
  * The name of the certificate map to add the certificates to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#certificate_map CertificateSyncGcpCertificateManager#certificate_map}
  */
  readonly certificateMap: string;
  /**
  * The hostname of the certificate map entry, such as www.example.com or *.example.com. Leave unset to use the primary entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#hostname CertificateSyncGcpCertificateManager#hostname}
  */
  readonly hostname?: string;
}

export function certificateSyncGcpCertificateManagerDestinationConfigCertificateMapBindingToTerraform(struct?: CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_map: cdktf.stringToTerraform(struct!.certificateMap),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function certificateSyncGcpCertificateManagerDestinationConfigCertificateMapBindingToHclTerraform(struct?: CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_map: {
      value: cdktf.stringToHclTerraform(struct!.certificateMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateMap = this._certificateMap;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateMap = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateMap = value.certificateMap;
      this._hostname = value.hostname;
    }
  }

  // certificate_map - computed: false, optional: false, required: true
  private _certificateMap?: string; 
  public get certificateMap() {
    return this.getStringAttribute('certificate_map');
  }
  public set certificateMap(value: string) {
    this._certificateMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateMapInput() {
    return this._certificateMap;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}
export interface CertificateSyncGcpCertificateManagerDestinationConfig {
  /**
  * Adds the synced certificates to an entry in an existing certificate map. Requires the global location and the default scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#certificate_map_binding CertificateSyncGcpCertificateManager#certificate_map_binding}
  */
  readonly certificateMapBinding?: CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding;
  /**
  * The ID of the GCP project to sync certificates to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#gcp_project_id CertificateSyncGcpCertificateManager#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * The Certificate Manager location to create certificates in, either global or a region ID such as us-central1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#location CertificateSyncGcpCertificateManager#location}
  */
  readonly location: string;
  /**
  * The scope of the synced certificates: default, edge-cache, all-regions or client-auth. Defaults to default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#scope CertificateSyncGcpCertificateManager#scope}
  */
  readonly scope?: string;
}

export function certificateSyncGcpCertificateManagerDestinationConfigToTerraform(struct?: CertificateSyncGcpCertificateManagerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_map_binding: certificateSyncGcpCertificateManagerDestinationConfigCertificateMapBindingToTerraform(struct!.certificateMapBinding),
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    location: cdktf.stringToTerraform(struct!.location),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function certificateSyncGcpCertificateManagerDestinationConfigToHclTerraform(struct?: CertificateSyncGcpCertificateManagerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_map_binding: {
      value: certificateSyncGcpCertificateManagerDestinationConfigCertificateMapBindingToHclTerraform(struct!.certificateMapBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding",
    },
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncGcpCertificateManagerDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncGcpCertificateManagerDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateMapBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateMapBinding = this._certificateMapBinding?.internalValue;
    }
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncGcpCertificateManagerDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateMapBinding.internalValue = undefined;
      this._gcpProjectId = undefined;
      this._location = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateMapBinding.internalValue = value.certificateMapBinding;
      this._gcpProjectId = value.gcpProjectId;
      this._location = value.location;
      this._scope = value.scope;
    }
  }

  // certificate_map_binding - computed: false, optional: true, required: false
  private _certificateMapBinding = new CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBindingOutputReference(this, "certificate_map_binding");
  public get certificateMapBinding() {
    return this._certificateMapBinding;
  }
  public putCertificateMapBinding(value: CertificateSyncGcpCertificateManagerDestinationConfigCertificateMapBinding) {
    this._certificateMapBinding.internalValue = value;
  }
  public resetCertificateMapBinding() {
    this._certificateMapBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateMapBindingInput() {
    return this._certificateMapBinding.internalValue;
  }

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface CertificateSyncGcpCertificateManagerSyncOptions {
  /**
  * Whether Infisical should remove certificates from GCP Certificate Manager when their certificates leave this sync, for example when `certificate_filters` stops matching them. Destroying the sync leaves them in place. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#can_remove_certificates CertificateSyncGcpCertificateManager#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The naming scheme for synced certificates. Must start with a lowercase letter and include the {{certificateId}} or {{shortCertificateId}} placeholder, and compiled names may contain only lowercase letters, digits and hyphens (1-63 characters). Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#certificate_name_schema CertificateSyncGcpCertificateManager#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
  /**
  * Whether to include the root CA certificate in the synced certificate chain. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#include_root_ca CertificateSyncGcpCertificateManager#include_root_ca}
  */
  readonly includeRootCa?: boolean | cdktf.IResolvable;
  /**
  * Labels to set on the synced GCP certificates, up to 62. The keys managed-by and infisical-certificate-id are reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#labels CertificateSyncGcpCertificateManager#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Whether to update the existing GCP certificate when a certificate is renewed instead of creating a new one. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#preserve_item_on_renewal CertificateSyncGcpCertificateManager#preserve_item_on_renewal}
  */
  readonly preserveItemOnRenewal?: boolean | cdktf.IResolvable;
}

export function certificateSyncGcpCertificateManagerSyncOptionsToTerraform(struct?: CertificateSyncGcpCertificateManagerSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
    include_root_ca: cdktf.booleanToTerraform(struct!.includeRootCa),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    preserve_item_on_renewal: cdktf.booleanToTerraform(struct!.preserveItemOnRenewal),
  }
}


export function certificateSyncGcpCertificateManagerSyncOptionsToHclTerraform(struct?: CertificateSyncGcpCertificateManagerSyncOptions | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class CertificateSyncGcpCertificateManagerSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncGcpCertificateManagerSyncOptions | cdktf.IResolvable | undefined {
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
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._preserveItemOnRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveItemOnRenewal = this._preserveItemOnRenewal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncGcpCertificateManagerSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
      this._includeRootCa = undefined;
      this._labels = undefined;
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
      this._labels = value.labels;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager infisical_certificate_sync_gcp_certificate_manager}
*/
export class CertificateSyncGcpCertificateManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_gcp_certificate_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncGcpCertificateManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncGcpCertificateManager to import
  * @param importFromId The id of the existing CertificateSyncGcpCertificateManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncGcpCertificateManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_gcp_certificate_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_gcp_certificate_manager infisical_certificate_sync_gcp_certificate_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncGcpCertificateManagerConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncGcpCertificateManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_gcp_certificate_manager',
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
  private _certificateFilters = new CertificateSyncGcpCertificateManagerCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncGcpCertificateManagerCertificateFilters) {
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
  private _destinationConfig = new CertificateSyncGcpCertificateManagerDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncGcpCertificateManagerDestinationConfig) {
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
  private _syncOptions = new CertificateSyncGcpCertificateManagerSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncGcpCertificateManagerSyncOptions) {
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
      certificate_filters: certificateSyncGcpCertificateManagerCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncGcpCertificateManagerDestinationConfigToTerraform(this._destinationConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncGcpCertificateManagerSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: certificateSyncGcpCertificateManagerCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncGcpCertificateManagerCertificateFilters",
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
        value: certificateSyncGcpCertificateManagerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncGcpCertificateManagerDestinationConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncGcpCertificateManagerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncGcpCertificateManagerSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
