// https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailSecurityDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#account_id EmailSecurityDomain#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}
  */
  readonly allowedDeliveryModes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}
  */
  readonly dropDispositions: string[];
  /**
  * Available values: "AllItems", "Inbox".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#folder EmailSecurityDomain#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}
  */
  readonly ipRestrictions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}
  */
  readonly lookbackHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}
  */
  readonly regions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}
  */
  readonly requireTlsInbound?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}
  */
  readonly requireTlsOutbound?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}
  */
  readonly transport?: string;
}
export interface EmailSecurityDomainAuthorization {
}

export function emailSecurityDomainAuthorizationToTerraform(struct?: EmailSecurityDomainAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function emailSecurityDomainAuthorizationToHclTerraform(struct?: EmailSecurityDomainAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EmailSecurityDomainAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmailSecurityDomainAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSecurityDomainAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorized - computed: true, optional: false, required: false
  public get authorized() {
    return this.getBooleanAttribute('authorized');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface EmailSecurityDomainEmailsProcessed {
}

export function emailSecurityDomainEmailsProcessedToTerraform(struct?: EmailSecurityDomainEmailsProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function emailSecurityDomainEmailsProcessedToHclTerraform(struct?: EmailSecurityDomainEmailsProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EmailSecurityDomainEmailsProcessedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EmailSecurityDomainEmailsProcessed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmailSecurityDomainEmailsProcessed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // total_emails_processed - computed: true, optional: false, required: false
  public get totalEmailsProcessed() {
    return this.getNumberAttribute('total_emails_processed');
  }

  // total_emails_processed_previous - computed: true, optional: false, required: false
  public get totalEmailsProcessedPrevious() {
    return this.getNumberAttribute('total_emails_processed_previous');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain cloudflare_email_security_domain}
*/
export class EmailSecurityDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_email_security_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailSecurityDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailSecurityDomain to import
  * @param importFromId The id of the existing EmailSecurityDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailSecurityDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_email_security_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain cloudflare_email_security_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailSecurityDomainConfig
  */
  public constructor(scope: Construct, id: string, config: EmailSecurityDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_email_security_domain',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.25.0'
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
    this._allowedDeliveryModes = config.allowedDeliveryModes;
    this._domain = config.domain;
    this._dropDispositions = config.dropDispositions;
    this._folder = config.folder;
    this._integrationId = config.integrationId;
    this._ipRestrictions = config.ipRestrictions;
    this._lookbackHops = config.lookbackHops;
    this._regions = config.regions;
    this._requireTlsInbound = config.requireTlsInbound;
    this._requireTlsOutbound = config.requireTlsOutbound;
    this._transport = config.transport;
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

  // allowed_delivery_modes - computed: false, optional: false, required: true
  private _allowedDeliveryModes?: string[]; 
  public get allowedDeliveryModes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_delivery_modes'));
  }
  public set allowedDeliveryModes(value: string[]) {
    this._allowedDeliveryModes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDeliveryModesInput() {
    return this._allowedDeliveryModes;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new EmailSecurityDomainAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dmarc_status - computed: true, optional: false, required: false
  public get dmarcStatus() {
    return this.getStringAttribute('dmarc_status');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // drop_dispositions - computed: false, optional: false, required: true
  private _dropDispositions?: string[]; 
  public get dropDispositions() {
    return cdktf.Fn.tolist(this.getListAttribute('drop_dispositions'));
  }
  public set dropDispositions(value: string[]) {
    this._dropDispositions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropDispositionsInput() {
    return this._dropDispositions;
  }

  // emails_processed - computed: true, optional: false, required: false
  private _emailsProcessed = new EmailSecurityDomainEmailsProcessedOutputReference(this, "emails_processed");
  public get emailsProcessed() {
    return this._emailsProcessed;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbox_provider - computed: true, optional: false, required: false
  public get inboxProvider() {
    return this.getStringAttribute('inbox_provider');
  }

  // integration_id - computed: false, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // ip_restrictions - computed: false, optional: false, required: true
  private _ipRestrictions?: string[]; 
  public get ipRestrictions() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_restrictions'));
  }
  public set ipRestrictions(value: string[]) {
    this._ipRestrictions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRestrictionsInput() {
    return this._ipRestrictions;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // lookback_hops - computed: true, optional: true, required: false
  private _lookbackHops?: number; 
  public get lookbackHops() {
    return this.getNumberAttribute('lookback_hops');
  }
  public set lookbackHops(value: number) {
    this._lookbackHops = value;
  }
  public resetLookbackHops() {
    this._lookbackHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookbackHopsInput() {
    return this._lookbackHops;
  }

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
  }

  // o365_tenant_id - computed: true, optional: false, required: false
  public get o365TenantId() {
    return this.getStringAttribute('o365_tenant_id');
  }

  // regions - computed: false, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // require_tls_inbound - computed: true, optional: true, required: false
  private _requireTlsInbound?: boolean | cdktf.IResolvable; 
  public get requireTlsInbound() {
    return this.getBooleanAttribute('require_tls_inbound');
  }
  public set requireTlsInbound(value: boolean | cdktf.IResolvable) {
    this._requireTlsInbound = value;
  }
  public resetRequireTlsInbound() {
    this._requireTlsInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsInboundInput() {
    return this._requireTlsInbound;
  }

  // require_tls_outbound - computed: true, optional: true, required: false
  private _requireTlsOutbound?: boolean | cdktf.IResolvable; 
  public get requireTlsOutbound() {
    return this.getBooleanAttribute('require_tls_outbound');
  }
  public set requireTlsOutbound(value: boolean | cdktf.IResolvable) {
    this._requireTlsOutbound = value;
  }
  public resetRequireTlsOutbound() {
    this._requireTlsOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTlsOutboundInput() {
    return this._requireTlsOutbound;
  }

  // spf_status - computed: true, optional: false, required: false
  public get spfStatus() {
    return this.getStringAttribute('spf_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: string; 
  public get transport() {
    return this.getStringAttribute('transport');
  }
  public set transport(value: string) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_delivery_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDeliveryModes),
      domain: cdktf.stringToTerraform(this._domain),
      drop_dispositions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dropDispositions),
      folder: cdktf.stringToTerraform(this._folder),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      ip_restrictions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipRestrictions),
      lookback_hops: cdktf.numberToTerraform(this._lookbackHops),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      require_tls_inbound: cdktf.booleanToTerraform(this._requireTlsInbound),
      require_tls_outbound: cdktf.booleanToTerraform(this._requireTlsOutbound),
      transport: cdktf.stringToTerraform(this._transport),
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
      allowed_delivery_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDeliveryModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_dispositions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dropDispositions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_restrictions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipRestrictions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lookback_hops: {
        value: cdktf.numberToHclTerraform(this._lookbackHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      require_tls_inbound: {
        value: cdktf.booleanToHclTerraform(this._requireTlsInbound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_tls_outbound: {
        value: cdktf.booleanToHclTerraform(this._requireTlsOutbound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transport: {
        value: cdktf.stringToHclTerraform(this._transport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
