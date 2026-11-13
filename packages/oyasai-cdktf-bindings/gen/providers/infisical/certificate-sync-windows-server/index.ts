// https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateSyncWindowsServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Certificate Manager application to create the sync in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#application_id CertificateSyncWindowsServer#application_id}
  */
  readonly applicationId: string;
  /**
  * Whether certificates should be automatically synced to the destination when they are added or renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#auto_sync_enabled CertificateSyncWindowsServer#auto_sync_enabled}
  */
  readonly autoSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Which of the application's certificates this sync holds. A certificate must match every field that is set: setting both `certificate_order_ids` and `profile_ids` selects only the certificates in both. Leave the block out to manage the certificates outside Terraform, for example in the Infisical UI. An empty block, or an empty `certificate_order_ids`, makes the sync hold no certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#certificate_filters CertificateSyncWindowsServer#certificate_filters}
  */
  readonly certificateFilters?: CertificateSyncWindowsServerCertificateFilters;
  /**
  * The ID of the App Connection to use for syncing. Supported connection types: winrm, ldap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#connection_id CertificateSyncWindowsServer#connection_id}
  */
  readonly connectionId: string;
  /**
  * An optional description for the Windows Server sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#description CertificateSyncWindowsServer#description}
  */
  readonly description?: string;
  /**
  * The destination configuration for the certificate sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#destination_config CertificateSyncWindowsServer#destination_config}
  */
  readonly destinationConfig: CertificateSyncWindowsServerDestinationConfig;
  /**
  * The password protecting the exported PKCS#12 or Java KeyStore file. Required when `export_format` is `pkcs12` or `jks`, unless `export_password_wo` is set. Stored in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#export_password CertificateSyncWindowsServer#export_password}
  */
  readonly exportPassword?: string;
  /**
  * The keystore export password as a write-only value that is never stored in state. Requires Terraform 1.11 or higher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#export_password_wo CertificateSyncWindowsServer#export_password_wo}
  */
  readonly exportPasswordWo?: string;
  /**
  * Used together with `export_password_wo` to trigger an update. Increment this value to send a new `export_password_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#export_password_wo_version CertificateSyncWindowsServer#export_password_wo_version}
  */
  readonly exportPasswordWoVersion?: number;
  /**
  * The name of the Windows Server sync to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#name CertificateSyncWindowsServer#name}
  */
  readonly name: string;
  /**
  * Parameters to modify how certificates are synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#sync_options CertificateSyncWindowsServer#sync_options}
  */
  readonly syncOptions: CertificateSyncWindowsServerSyncOptions;
}
export interface CertificateSyncWindowsServerCertificateFiltersMetadata {
  /**
  * The metadata key the certificate must carry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#key CertificateSyncWindowsServer#key}
  */
  readonly key: string;
  /**
  * The value the key must have. Leave unset to match any value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#value CertificateSyncWindowsServer#value}
  */
  readonly value?: string;
}

export function certificateSyncWindowsServerCertificateFiltersMetadataToTerraform(struct?: CertificateSyncWindowsServerCertificateFiltersMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function certificateSyncWindowsServerCertificateFiltersMetadataToHclTerraform(struct?: CertificateSyncWindowsServerCertificateFiltersMetadata | cdktf.IResolvable): any {
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

export class CertificateSyncWindowsServerCertificateFiltersMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateSyncWindowsServerCertificateFiltersMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncWindowsServerCertificateFiltersMetadata | cdktf.IResolvable | undefined) {
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

export class CertificateSyncWindowsServerCertificateFiltersMetadataList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncWindowsServerCertificateFiltersMetadata[] | cdktf.IResolvable

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
  public get(index: number): CertificateSyncWindowsServerCertificateFiltersMetadataOutputReference {
    return new CertificateSyncWindowsServerCertificateFiltersMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncWindowsServerCertificateFilters {
  /**
  * The certificate orders to sync, from the `order_id` attribute of `infisical_cert_manager_certificate`. A certificate and all of its renewals share one order, so the sync keeps holding the newest certificate of each order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#certificate_order_ids CertificateSyncWindowsServer#certificate_order_ids}
  */
  readonly certificateOrderIds?: string[];
  /**
  * Sync certificates carrying every one of these metadata pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#metadata CertificateSyncWindowsServer#metadata}
  */
  readonly metadata?: CertificateSyncWindowsServerCertificateFiltersMetadata[] | cdktf.IResolvable;
  /**
  * Sync certificates issued from any one of these certificate profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#profile_ids CertificateSyncWindowsServer#profile_ids}
  */
  readonly profileIds?: string[];
}

export function certificateSyncWindowsServerCertificateFiltersToTerraform(struct?: CertificateSyncWindowsServerCertificateFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_order_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateOrderIds),
    metadata: cdktf.listMapper(certificateSyncWindowsServerCertificateFiltersMetadataToTerraform, false)(struct!.metadata),
    profile_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profileIds),
  }
}


export function certificateSyncWindowsServerCertificateFiltersToHclTerraform(struct?: CertificateSyncWindowsServerCertificateFilters | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(certificateSyncWindowsServerCertificateFiltersMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CertificateSyncWindowsServerCertificateFiltersMetadataList",
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

export class CertificateSyncWindowsServerCertificateFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncWindowsServerCertificateFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateSyncWindowsServerCertificateFilters | cdktf.IResolvable | undefined) {
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
  private _metadata = new CertificateSyncWindowsServerCertificateFiltersMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CertificateSyncWindowsServerCertificateFiltersMetadata[] | cdktf.IResolvable) {
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
export interface CertificateSyncWindowsServerDestinationConfig {
  /**
  * The absolute local drive directory on the server to write certificate files to (e.g. C:\certs), where UNC paths are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#destination_path CertificateSyncWindowsServer#destination_path}
  */
  readonly destinationPath: string;
  /**
  * The hostname or IP address of the server to sync to. Required with an LDAP connection and not allowed with any other connection type. The LDAP connection must have a gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#host CertificateSyncWindowsServer#host}
  */
  readonly host?: string;
  /**
  * The WinRM port to reach the server on. Only valid with an LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#port CertificateSyncWindowsServer#port}
  */
  readonly port?: number;
  /**
  * The PEM-encoded CA certificate used to verify a self-signed WinRM HTTPS listener. Only valid with an LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#ssl_certificate CertificateSyncWindowsServer#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Whether to reach the server over HTTPS WinRM instead of HTTP with NTLM message encryption. Only valid with an LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#ssl_enabled CertificateSyncWindowsServer#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to verify the server's WinRM certificate when using HTTPS. Only valid with an LDAP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#ssl_reject_unauthorized CertificateSyncWindowsServer#ssl_reject_unauthorized}
  */
  readonly sslRejectUnauthorized?: boolean | cdktf.IResolvable;
}

export function certificateSyncWindowsServerDestinationConfigToTerraform(struct?: CertificateSyncWindowsServerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_path: cdktf.stringToTerraform(struct!.destinationPath),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    ssl_certificate: cdktf.stringToTerraform(struct!.sslCertificate),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    ssl_reject_unauthorized: cdktf.booleanToTerraform(struct!.sslRejectUnauthorized),
  }
}


export function certificateSyncWindowsServerDestinationConfigToHclTerraform(struct?: CertificateSyncWindowsServerDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_path: {
      value: cdktf.stringToHclTerraform(struct!.destinationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_certificate: {
      value: cdktf.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssl_reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.sslRejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncWindowsServerDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncWindowsServerDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPath = this._destinationPath;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._sslRejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRejectUnauthorized = this._sslRejectUnauthorized;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncWindowsServerDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPath = undefined;
      this._host = undefined;
      this._port = undefined;
      this._sslCertificate = undefined;
      this._sslEnabled = undefined;
      this._sslRejectUnauthorized = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPath = value.destinationPath;
      this._host = value.host;
      this._port = value.port;
      this._sslCertificate = value.sslCertificate;
      this._sslEnabled = value.sslEnabled;
      this._sslRejectUnauthorized = value.sslRejectUnauthorized;
    }
  }

  // destination_path - computed: false, optional: false, required: true
  private _destinationPath?: string; 
  public get destinationPath() {
    return this.getStringAttribute('destination_path');
  }
  public set destinationPath(value: string) {
    this._destinationPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPathInput() {
    return this._destinationPath;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // ssl_reject_unauthorized - computed: false, optional: true, required: false
  private _sslRejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get sslRejectUnauthorized() {
    return this.getBooleanAttribute('ssl_reject_unauthorized');
  }
  public set sslRejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._sslRejectUnauthorized = value;
  }
  public resetSslRejectUnauthorized() {
    this._sslRejectUnauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRejectUnauthorizedInput() {
    return this._sslRejectUnauthorized;
  }
}
export interface CertificateSyncWindowsServerSyncOptionsFileAccessRules {
  /**
  * The access level to grant. Supported values: `read`, `modify`, `full-control`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#access CertificateSyncWindowsServer#access}
  */
  readonly access: string;
  /**
  * The Windows user or group to grant access to (e.g. DOMAIN\svc-account or BUILTIN\Administrators).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#identity CertificateSyncWindowsServer#identity}
  */
  readonly identity: string;
}

export function certificateSyncWindowsServerSyncOptionsFileAccessRulesToTerraform(struct?: CertificateSyncWindowsServerSyncOptionsFileAccessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    identity: cdktf.stringToTerraform(struct!.identity),
  }
}


export function certificateSyncWindowsServerSyncOptionsFileAccessRulesToHclTerraform(struct?: CertificateSyncWindowsServerSyncOptionsFileAccessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncWindowsServerSyncOptionsFileAccessRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateSyncWindowsServerSyncOptionsFileAccessRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncWindowsServerSyncOptionsFileAccessRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._identity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
      this._identity = value.identity;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // identity - computed: false, optional: false, required: true
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }
}

export class CertificateSyncWindowsServerSyncOptionsFileAccessRulesList extends cdktf.ComplexList {
  public internalValue? : CertificateSyncWindowsServerSyncOptionsFileAccessRules[] | cdktf.IResolvable

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
  public get(index: number): CertificateSyncWindowsServerSyncOptionsFileAccessRulesOutputReference {
    return new CertificateSyncWindowsServerSyncOptionsFileAccessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateSyncWindowsServerSyncOptions {
  /**
  * Whether Infisical should delete certificate files from the server when their certificates leave this sync, for example when `certificate_filters` stops matching them. Destroying the sync leaves them in place. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#can_remove_certificates CertificateSyncWindowsServer#can_remove_certificates}
  */
  readonly canRemoveCertificates?: boolean | cdktf.IResolvable;
  /**
  * The file base name for synced certificates. It must resolve to a single file name of 1-200 characters using only letters, digits, dots (.), dashes (-), and underscores (_). Available placeholders: {{certificateId}}, {{shortCertificateId}}, {{profileId}}, {{applicationId}}, {{applicationName}}, {{commonName}}. A schema with no placeholder can be linked to only one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#certificate_name_schema CertificateSyncWindowsServer#certificate_name_schema}
  */
  readonly certificateNameSchema: string;
  /**
  * Whether to write the leaf certificate followed by the chain into a single PEM file instead of a separate chain file. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#combine_certificate_chain CertificateSyncWindowsServer#combine_certificate_chain}
  */
  readonly combineCertificateChain?: boolean | cdktf.IResolvable;
  /**
  * The file format to deliver certificates in. Supported values: `pem`, `pkcs12`, `jks`. Defaults to `pkcs12`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#export_format CertificateSyncWindowsServer#export_format}
  */
  readonly exportFormat?: string;
  /**
  * Access rules granted on the delivered files to Windows users or groups, up to 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#file_access_rules CertificateSyncWindowsServer#file_access_rules}
  */
  readonly fileAccessRules?: CertificateSyncWindowsServerSyncOptionsFileAccessRules[] | cdktf.IResolvable;
  /**
  * A command run on the server to check the health of the delivered certificates. Requires a gateway on the connection. Available variables: `{{certificateFiles}}`, `{{certificateDirectory}}`, `{{certificatePath}}`, `{{commonName}}`, `{{exportPassword}}`. Using `{{certificatePath}}` or `{{commonName}}` limits the sync to one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#health_check_command CertificateSyncWindowsServer#health_check_command}
  */
  readonly healthCheckCommand?: string;
  /**
  * Whether to deliver the certificate's private key alongside the certificate. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#include_private_key CertificateSyncWindowsServer#include_private_key}
  */
  readonly includePrivateKey?: boolean | cdktf.IResolvable;
  /**
  * Whether to include the root CA certificate in the delivered certificate chain. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#include_root_ca CertificateSyncWindowsServer#include_root_ca}
  */
  readonly includeRootCa?: boolean | cdktf.IResolvable;
  /**
  * Whether to also deliver a `<name>.truststore.jks` file holding the chain and root CA as trusted certificates. Only valid when `export_format` is `jks`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#include_truststore CertificateSyncWindowsServer#include_truststore}
  */
  readonly includeTruststore?: boolean | cdktf.IResolvable;
  /**
  * The alias of the private key entry in a PKCS#12 or JKS keystore, using only letters, digits, dots (.), dashes (-), and underscores (_). Only valid when `export_format` is `pkcs12` or `jks`, and defaults to the certificate's file base name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#keystore_alias CertificateSyncWindowsServer#keystore_alias}
  */
  readonly keystoreAlias?: string;
  /**
  * The file extension of PEM certificate and chain files. Supported values: `pem`, `crt`. Defaults to `pem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#pem_certificate_extension CertificateSyncWindowsServer#pem_certificate_extension}
  */
  readonly pemCertificateExtension?: string;
  /**
  * A command run on the server after certificates are delivered, for example to reload a service. Requires a gateway on the connection. Available variables: `{{certificateFiles}}`, `{{certificateDirectory}}`, `{{certificatePath}}`, `{{commonName}}`, `{{exportPassword}}`. Using `{{certificatePath}}` or `{{commonName}}` limits the sync to one certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#post_sync_command CertificateSyncWindowsServer#post_sync_command}
  */
  readonly postSyncCommand?: string;
}

export function certificateSyncWindowsServerSyncOptionsToTerraform(struct?: CertificateSyncWindowsServerSyncOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_remove_certificates: cdktf.booleanToTerraform(struct!.canRemoveCertificates),
    certificate_name_schema: cdktf.stringToTerraform(struct!.certificateNameSchema),
    combine_certificate_chain: cdktf.booleanToTerraform(struct!.combineCertificateChain),
    export_format: cdktf.stringToTerraform(struct!.exportFormat),
    file_access_rules: cdktf.listMapper(certificateSyncWindowsServerSyncOptionsFileAccessRulesToTerraform, false)(struct!.fileAccessRules),
    health_check_command: cdktf.stringToTerraform(struct!.healthCheckCommand),
    include_private_key: cdktf.booleanToTerraform(struct!.includePrivateKey),
    include_root_ca: cdktf.booleanToTerraform(struct!.includeRootCa),
    include_truststore: cdktf.booleanToTerraform(struct!.includeTruststore),
    keystore_alias: cdktf.stringToTerraform(struct!.keystoreAlias),
    pem_certificate_extension: cdktf.stringToTerraform(struct!.pemCertificateExtension),
    post_sync_command: cdktf.stringToTerraform(struct!.postSyncCommand),
  }
}


export function certificateSyncWindowsServerSyncOptionsToHclTerraform(struct?: CertificateSyncWindowsServerSyncOptions | cdktf.IResolvable): any {
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
    combine_certificate_chain: {
      value: cdktf.booleanToHclTerraform(struct!.combineCertificateChain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    export_format: {
      value: cdktf.stringToHclTerraform(struct!.exportFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_access_rules: {
      value: cdktf.listMapperHcl(certificateSyncWindowsServerSyncOptionsFileAccessRulesToHclTerraform, false)(struct!.fileAccessRules),
      isBlock: true,
      type: "list",
      storageClassType: "CertificateSyncWindowsServerSyncOptionsFileAccessRulesList",
    },
    health_check_command: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_private_key: {
      value: cdktf.booleanToHclTerraform(struct!.includePrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_root_ca: {
      value: cdktf.booleanToHclTerraform(struct!.includeRootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_truststore: {
      value: cdktf.booleanToHclTerraform(struct!.includeTruststore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keystore_alias: {
      value: cdktf.stringToHclTerraform(struct!.keystoreAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_certificate_extension: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificateExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_sync_command: {
      value: cdktf.stringToHclTerraform(struct!.postSyncCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateSyncWindowsServerSyncOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateSyncWindowsServerSyncOptions | cdktf.IResolvable | undefined {
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
    if (this._combineCertificateChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.combineCertificateChain = this._combineCertificateChain;
    }
    if (this._exportFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportFormat = this._exportFormat;
    }
    if (this._fileAccessRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileAccessRules = this._fileAccessRules?.internalValue;
    }
    if (this._healthCheckCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckCommand = this._healthCheckCommand;
    }
    if (this._includePrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePrivateKey = this._includePrivateKey;
    }
    if (this._includeRootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRootCa = this._includeRootCa;
    }
    if (this._includeTruststore !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTruststore = this._includeTruststore;
    }
    if (this._keystoreAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystoreAlias = this._keystoreAlias;
    }
    if (this._pemCertificateExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificateExtension = this._pemCertificateExtension;
    }
    if (this._postSyncCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.postSyncCommand = this._postSyncCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateSyncWindowsServerSyncOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canRemoveCertificates = undefined;
      this._certificateNameSchema = undefined;
      this._combineCertificateChain = undefined;
      this._exportFormat = undefined;
      this._fileAccessRules.internalValue = undefined;
      this._healthCheckCommand = undefined;
      this._includePrivateKey = undefined;
      this._includeRootCa = undefined;
      this._includeTruststore = undefined;
      this._keystoreAlias = undefined;
      this._pemCertificateExtension = undefined;
      this._postSyncCommand = undefined;
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
      this._combineCertificateChain = value.combineCertificateChain;
      this._exportFormat = value.exportFormat;
      this._fileAccessRules.internalValue = value.fileAccessRules;
      this._healthCheckCommand = value.healthCheckCommand;
      this._includePrivateKey = value.includePrivateKey;
      this._includeRootCa = value.includeRootCa;
      this._includeTruststore = value.includeTruststore;
      this._keystoreAlias = value.keystoreAlias;
      this._pemCertificateExtension = value.pemCertificateExtension;
      this._postSyncCommand = value.postSyncCommand;
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

  // combine_certificate_chain - computed: true, optional: true, required: false
  private _combineCertificateChain?: boolean | cdktf.IResolvable; 
  public get combineCertificateChain() {
    return this.getBooleanAttribute('combine_certificate_chain');
  }
  public set combineCertificateChain(value: boolean | cdktf.IResolvable) {
    this._combineCertificateChain = value;
  }
  public resetCombineCertificateChain() {
    this._combineCertificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combineCertificateChainInput() {
    return this._combineCertificateChain;
  }

  // export_format - computed: true, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // file_access_rules - computed: false, optional: true, required: false
  private _fileAccessRules = new CertificateSyncWindowsServerSyncOptionsFileAccessRulesList(this, "file_access_rules", false);
  public get fileAccessRules() {
    return this._fileAccessRules;
  }
  public putFileAccessRules(value: CertificateSyncWindowsServerSyncOptionsFileAccessRules[] | cdktf.IResolvable) {
    this._fileAccessRules.internalValue = value;
  }
  public resetFileAccessRules() {
    this._fileAccessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileAccessRulesInput() {
    return this._fileAccessRules.internalValue;
  }

  // health_check_command - computed: false, optional: true, required: false
  private _healthCheckCommand?: string; 
  public get healthCheckCommand() {
    return this.getStringAttribute('health_check_command');
  }
  public set healthCheckCommand(value: string) {
    this._healthCheckCommand = value;
  }
  public resetHealthCheckCommand() {
    this._healthCheckCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCommandInput() {
    return this._healthCheckCommand;
  }

  // include_private_key - computed: true, optional: true, required: false
  private _includePrivateKey?: boolean | cdktf.IResolvable; 
  public get includePrivateKey() {
    return this.getBooleanAttribute('include_private_key');
  }
  public set includePrivateKey(value: boolean | cdktf.IResolvable) {
    this._includePrivateKey = value;
  }
  public resetIncludePrivateKey() {
    this._includePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrivateKeyInput() {
    return this._includePrivateKey;
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

  // include_truststore - computed: false, optional: true, required: false
  private _includeTruststore?: boolean | cdktf.IResolvable; 
  public get includeTruststore() {
    return this.getBooleanAttribute('include_truststore');
  }
  public set includeTruststore(value: boolean | cdktf.IResolvable) {
    this._includeTruststore = value;
  }
  public resetIncludeTruststore() {
    this._includeTruststore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTruststoreInput() {
    return this._includeTruststore;
  }

  // keystore_alias - computed: false, optional: true, required: false
  private _keystoreAlias?: string; 
  public get keystoreAlias() {
    return this.getStringAttribute('keystore_alias');
  }
  public set keystoreAlias(value: string) {
    this._keystoreAlias = value;
  }
  public resetKeystoreAlias() {
    this._keystoreAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreAliasInput() {
    return this._keystoreAlias;
  }

  // pem_certificate_extension - computed: true, optional: true, required: false
  private _pemCertificateExtension?: string; 
  public get pemCertificateExtension() {
    return this.getStringAttribute('pem_certificate_extension');
  }
  public set pemCertificateExtension(value: string) {
    this._pemCertificateExtension = value;
  }
  public resetPemCertificateExtension() {
    this._pemCertificateExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateExtensionInput() {
    return this._pemCertificateExtension;
  }

  // post_sync_command - computed: false, optional: true, required: false
  private _postSyncCommand?: string; 
  public get postSyncCommand() {
    return this.getStringAttribute('post_sync_command');
  }
  public set postSyncCommand(value: string) {
    this._postSyncCommand = value;
  }
  public resetPostSyncCommand() {
    this._postSyncCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postSyncCommandInput() {
    return this._postSyncCommand;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server infisical_certificate_sync_windows_server}
*/
export class CertificateSyncWindowsServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infisical_certificate_sync_windows_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateSyncWindowsServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateSyncWindowsServer to import
  * @param importFromId The id of the existing CertificateSyncWindowsServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateSyncWindowsServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infisical_certificate_sync_windows_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infisical/infisical/0.20.14/docs/resources/certificate_sync_windows_server infisical_certificate_sync_windows_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateSyncWindowsServerConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateSyncWindowsServerConfig) {
    super(scope, id, {
      terraformResourceType: 'infisical_certificate_sync_windows_server',
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
    this._exportPassword = config.exportPassword;
    this._exportPasswordWo = config.exportPasswordWo;
    this._exportPasswordWoVersion = config.exportPasswordWoVersion;
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
  private _certificateFilters = new CertificateSyncWindowsServerCertificateFiltersOutputReference(this, "certificate_filters");
  public get certificateFilters() {
    return this._certificateFilters;
  }
  public putCertificateFilters(value: CertificateSyncWindowsServerCertificateFilters) {
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
  private _destinationConfig = new CertificateSyncWindowsServerDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: CertificateSyncWindowsServerDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // export_password - computed: false, optional: true, required: false
  private _exportPassword?: string; 
  public get exportPassword() {
    return this.getStringAttribute('export_password');
  }
  public set exportPassword(value: string) {
    this._exportPassword = value;
  }
  public resetExportPassword() {
    this._exportPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPasswordInput() {
    return this._exportPassword;
  }

  // export_password_wo - computed: false, optional: true, required: false
  private _exportPasswordWo?: string; 
  public get exportPasswordWo() {
    return this.getStringAttribute('export_password_wo');
  }
  public set exportPasswordWo(value: string) {
    this._exportPasswordWo = value;
  }
  public resetExportPasswordWo() {
    this._exportPasswordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPasswordWoInput() {
    return this._exportPasswordWo;
  }

  // export_password_wo_version - computed: false, optional: true, required: false
  private _exportPasswordWoVersion?: number; 
  public get exportPasswordWoVersion() {
    return this.getNumberAttribute('export_password_wo_version');
  }
  public set exportPasswordWoVersion(value: number) {
    this._exportPasswordWoVersion = value;
  }
  public resetExportPasswordWoVersion() {
    this._exportPasswordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPasswordWoVersionInput() {
    return this._exportPasswordWoVersion;
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
  private _syncOptions = new CertificateSyncWindowsServerSyncOptionsOutputReference(this, "sync_options");
  public get syncOptions() {
    return this._syncOptions;
  }
  public putSyncOptions(value: CertificateSyncWindowsServerSyncOptions) {
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
      certificate_filters: certificateSyncWindowsServerCertificateFiltersToTerraform(this._certificateFilters.internalValue),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      destination_config: certificateSyncWindowsServerDestinationConfigToTerraform(this._destinationConfig.internalValue),
      export_password: cdktf.stringToTerraform(this._exportPassword),
      export_password_wo: cdktf.stringToTerraform(this._exportPasswordWo),
      export_password_wo_version: cdktf.numberToTerraform(this._exportPasswordWoVersion),
      name: cdktf.stringToTerraform(this._name),
      sync_options: certificateSyncWindowsServerSyncOptionsToTerraform(this._syncOptions.internalValue),
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
        value: certificateSyncWindowsServerCertificateFiltersToHclTerraform(this._certificateFilters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncWindowsServerCertificateFilters",
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
        value: certificateSyncWindowsServerDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncWindowsServerDestinationConfig",
      },
      export_password: {
        value: cdktf.stringToHclTerraform(this._exportPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_password_wo: {
        value: cdktf.stringToHclTerraform(this._exportPasswordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_password_wo_version: {
        value: cdktf.numberToHclTerraform(this._exportPasswordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_options: {
        value: certificateSyncWindowsServerSyncOptionsToHclTerraform(this._syncOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateSyncWindowsServerSyncOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
