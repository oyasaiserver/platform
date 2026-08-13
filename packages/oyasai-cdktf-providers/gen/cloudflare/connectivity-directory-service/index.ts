// https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectivityDirectoryServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#account_id ConnectivityDirectoryService#account_id}
  */
  readonly accountId: string;
  /**
  * Available values: "postgresql", "mysql".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#app_protocol ConnectivityDirectoryService#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#host ConnectivityDirectoryService#host}
  */
  readonly host: ConnectivityDirectoryServiceHost;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#http_port ConnectivityDirectoryService#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#https_port ConnectivityDirectoryService#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#name ConnectivityDirectoryService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#tcp_port ConnectivityDirectoryService#tcp_port}
  */
  readonly tcpPort?: number;
  /**
  * TLS settings for a connectivity service.
  * 
  * If omitted, the default mode (`verify_full`) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#tls_settings ConnectivityDirectoryService#tls_settings}
  */
  readonly tlsSettings?: ConnectivityDirectoryServiceTlsSettings;
  /**
  * Available values: "tcp", "http".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#type ConnectivityDirectoryService#type}
  */
  readonly type: string;
}
export interface ConnectivityDirectoryServiceHostNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}
  */
  readonly tunnelId: string;
}

export function connectivityDirectoryServiceHostNetworkToTerraform(struct?: ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_id: cdktf.stringToTerraform(struct!.tunnelId),
  }
}


export function connectivityDirectoryServiceHostNetworkToHclTerraform(struct?: ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectivityDirectoryServiceHostNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectivityDirectoryServiceHostNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelId = value.tunnelId;
    }
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }
}
export interface ConnectivityDirectoryServiceHostResolverNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#resolver_ips ConnectivityDirectoryService#resolver_ips}
  */
  readonly resolverIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#tunnel_id ConnectivityDirectoryService#tunnel_id}
  */
  readonly tunnelId: string;
}

export function connectivityDirectoryServiceHostResolverNetworkToTerraform(struct?: ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolver_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resolverIps),
    tunnel_id: cdktf.stringToTerraform(struct!.tunnelId),
  }
}


export function connectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct?: ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolver_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resolverIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel_id: {
      value: cdktf.stringToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectivityDirectoryServiceHostResolverNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolverIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverIps = this._resolverIps;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectivityDirectoryServiceHostResolverNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolverIps = undefined;
      this._tunnelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolverIps = value.resolverIps;
      this._tunnelId = value.tunnelId;
    }
  }

  // resolver_ips - computed: false, optional: true, required: false
  private _resolverIps?: string[]; 
  public get resolverIps() {
    return this.getListAttribute('resolver_ips');
  }
  public set resolverIps(value: string[]) {
    this._resolverIps = value;
  }
  public resetResolverIps() {
    this._resolverIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverIpsInput() {
    return this._resolverIps;
  }

  // tunnel_id - computed: false, optional: false, required: true
  private _tunnelId?: string; 
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }
  public set tunnelId(value: string) {
    this._tunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }
}
export interface ConnectivityDirectoryServiceHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#hostname ConnectivityDirectoryService#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#ipv4 ConnectivityDirectoryService#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#ipv6 ConnectivityDirectoryService#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#network ConnectivityDirectoryService#network}
  */
  readonly network?: ConnectivityDirectoryServiceHostNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#resolver_network ConnectivityDirectoryService#resolver_network}
  */
  readonly resolverNetwork?: ConnectivityDirectoryServiceHostResolverNetwork;
}

export function connectivityDirectoryServiceHostToTerraform(struct?: ConnectivityDirectoryServiceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: connectivityDirectoryServiceHostNetworkToTerraform(struct!.network),
    resolver_network: connectivityDirectoryServiceHostResolverNetworkToTerraform(struct!.resolverNetwork),
  }
}


export function connectivityDirectoryServiceHostToHclTerraform(struct?: ConnectivityDirectoryServiceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: connectivityDirectoryServiceHostNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectivityDirectoryServiceHostNetwork",
    },
    resolver_network: {
      value: connectivityDirectoryServiceHostResolverNetworkToHclTerraform(struct!.resolverNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectivityDirectoryServiceHostResolverNetwork",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectivityDirectoryServiceHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectivityDirectoryServiceHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._resolverNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverNetwork = this._resolverNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectivityDirectoryServiceHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._network.internalValue = undefined;
      this._resolverNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._network.internalValue = value.network;
      this._resolverNetwork.internalValue = value.resolverNetwork;
    }
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ConnectivityDirectoryServiceHostNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: ConnectivityDirectoryServiceHostNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // resolver_network - computed: false, optional: true, required: false
  private _resolverNetwork = new ConnectivityDirectoryServiceHostResolverNetworkOutputReference(this, "resolver_network");
  public get resolverNetwork() {
    return this._resolverNetwork;
  }
  public putResolverNetwork(value: ConnectivityDirectoryServiceHostResolverNetwork) {
    this._resolverNetwork.internalValue = value;
  }
  public resetResolverNetwork() {
    this._resolverNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverNetworkInput() {
    return this._resolverNetwork.internalValue;
  }
}
export interface ConnectivityDirectoryServiceTlsSettings {
  /**
  * TLS certificate verification mode for the connection to the origin.
  * 
  * - `"verify_full"` — verify certificate chain and hostname (default)
  * - `"verify_ca"` — verify certificate chain only, skip hostname check
  * - `"disabled"` — do not verify the server certificate at all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#cert_verification_mode ConnectivityDirectoryService#cert_verification_mode}
  */
  readonly certVerificationMode: string;
}

export function connectivityDirectoryServiceTlsSettingsToTerraform(struct?: ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_verification_mode: cdktf.stringToTerraform(struct!.certVerificationMode),
  }
}


export function connectivityDirectoryServiceTlsSettingsToHclTerraform(struct?: ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_verification_mode: {
      value: cdktf.stringToHclTerraform(struct!.certVerificationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectivityDirectoryServiceTlsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certVerificationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.certVerificationMode = this._certVerificationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectivityDirectoryServiceTlsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certVerificationMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certVerificationMode = value.certVerificationMode;
    }
  }

  // cert_verification_mode - computed: false, optional: false, required: true
  private _certVerificationMode?: string; 
  public get certVerificationMode() {
    return this.getStringAttribute('cert_verification_mode');
  }
  public set certVerificationMode(value: string) {
    this._certVerificationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certVerificationModeInput() {
    return this._certVerificationMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service}
*/
export class ConnectivityDirectoryService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_connectivity_directory_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectivityDirectoryService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectivityDirectoryService to import
  * @param importFromId The id of the existing ConnectivityDirectoryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectivityDirectoryService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_connectivity_directory_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.22.0/docs/resources/connectivity_directory_service cloudflare_connectivity_directory_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectivityDirectoryServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectivityDirectoryServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_connectivity_directory_service',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.22.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._appProtocol = config.appProtocol;
    this._host.internalValue = config.host;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._name = config.name;
    this._tcpPort = config.tcpPort;
    this._tlsSettings.internalValue = config.tlsSettings;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // host - computed: false, optional: false, required: true
  private _host = new ConnectivityDirectoryServiceHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: ConnectivityDirectoryServiceHost) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
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

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // tcp_port - computed: false, optional: true, required: false
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  public resetTcpPort() {
    this._tcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }

  // tls_settings - computed: false, optional: true, required: false
  private _tlsSettings = new ConnectivityDirectoryServiceTlsSettingsOutputReference(this, "tls_settings");
  public get tlsSettings() {
    return this._tlsSettings;
  }
  public putTlsSettings(value: ConnectivityDirectoryServiceTlsSettings) {
    this._tlsSettings.internalValue = value;
  }
  public resetTlsSettings() {
    this._tlsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSettingsInput() {
    return this._tlsSettings.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      app_protocol: cdktf.stringToTerraform(this._appProtocol),
      host: connectivityDirectoryServiceHostToTerraform(this._host.internalValue),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      name: cdktf.stringToTerraform(this._name),
      tcp_port: cdktf.numberToTerraform(this._tcpPort),
      tls_settings: connectivityDirectoryServiceTlsSettingsToTerraform(this._tlsSettings.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_protocol: {
        value: cdktf.stringToHclTerraform(this._appProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: connectivityDirectoryServiceHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectivityDirectoryServiceHost",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
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
      tcp_port: {
        value: cdktf.numberToHclTerraform(this._tcpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_settings: {
        value: connectivityDirectoryServiceTlsSettingsToHclTerraform(this._tlsSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectivityDirectoryServiceTlsSettings",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
