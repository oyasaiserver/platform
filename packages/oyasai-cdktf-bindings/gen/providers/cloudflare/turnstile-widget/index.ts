// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TurnstileWidgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}
  */
  readonly accountId: string;
  /**
  * If bot_fight_mode is set to `true`, Cloudflare issues computationally
  * expensive challenges in response to malicious bots (ENT only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}
  */
  readonly botFightMode?: boolean | cdktf.IResolvable;
  /**
  * If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,
  * this setting can determine the clearance level to be set
  * Available values: "no_clearance", "jschallenge", "managed", "interactive".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#clearance_level TurnstileWidget#clearance_level}
  */
  readonly clearanceLevel?: string;
  /**
  * Direction to order widgets.
  * Available values: "asc", "desc".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#direction TurnstileWidget#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}
  */
  readonly domains: string[];
  /**
  * Return the Ephemeral ID in /siteverify (ENT only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#ephemeral_id TurnstileWidget#ephemeral_id}
  */
  readonly ephemeralId?: boolean | cdktf.IResolvable;
  /**
  * Filter widgets by field. The `name` field uses case-insensitive
  * substring matching; `sitekey` uses exact matching.
  * Format: `field:value`
  * 
  * Supported fields:
  * - `name` - Filter by widget name (e.g., `filter=name:login-form`)
  * - `sitekey` - Filter by sitekey (e.g., `filter=sitekey:0x4AAA`)
  * 
  * Returns 400 Bad Request if the field is unsupported or format is invalid.
  * An empty filter value returns all results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#filter TurnstileWidget#filter}
  */
  readonly filter?: string;
  /**
  * Widget Mode
  * Available values: "non-interactive", "invisible", "managed".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}
  */
  readonly mode: string;
  /**
  * Human readable widget name. Not unique. Cloudflare suggests that you
  * set this to a meaningful string to make it easier to identify your
  * widget, and where it is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#name TurnstileWidget#name}
  */
  readonly name: string;
  /**
  * Do not show any Cloudflare branding on the widget (ENT only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}
  */
  readonly offlabel?: boolean | cdktf.IResolvable;
  /**
  * Field to order widgets by.
  * Available values: "id", "sitekey", "name", "created_on", "modified_on".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#order TurnstileWidget#order}
  */
  readonly order?: string;
  /**
  * Page number of paginated results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#page TurnstileWidget#page}
  */
  readonly page?: number;
  /**
  * Number of items per page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#per_page TurnstileWidget#per_page}
  */
  readonly perPage?: number;
  /**
  * Region where this widget can be used. This cannot be changed after creation.
  * Available values: "world", "china".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#region TurnstileWidget#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}
*/
export class TurnstileWidget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_turnstile_widget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TurnstileWidget to import
  * @param importFromId The id of the existing TurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TurnstileWidget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_turnstile_widget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/turnstile_widget cloudflare_turnstile_widget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TurnstileWidgetConfig
  */
  public constructor(scope: Construct, id: string, config: TurnstileWidgetConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_turnstile_widget',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.29.0'
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
    this._botFightMode = config.botFightMode;
    this._clearanceLevel = config.clearanceLevel;
    this._direction = config.direction;
    this._domains = config.domains;
    this._ephemeralId = config.ephemeralId;
    this._filter = config.filter;
    this._mode = config.mode;
    this._name = config.name;
    this._offlabel = config.offlabel;
    this._order = config.order;
    this._page = config.page;
    this._perPage = config.perPage;
    this._region = config.region;
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

  // bot_fight_mode - computed: true, optional: true, required: false
  private _botFightMode?: boolean | cdktf.IResolvable; 
  public get botFightMode() {
    return this.getBooleanAttribute('bot_fight_mode');
  }
  public set botFightMode(value: boolean | cdktf.IResolvable) {
    this._botFightMode = value;
  }
  public resetBotFightMode() {
    this._botFightMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botFightModeInput() {
    return this._botFightMode;
  }

  // clearance_level - computed: true, optional: true, required: false
  private _clearanceLevel?: string; 
  public get clearanceLevel() {
    return this.getStringAttribute('clearance_level');
  }
  public set clearanceLevel(value: string) {
    this._clearanceLevel = value;
  }
  public resetClearanceLevel() {
    this._clearanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearanceLevelInput() {
    return this._clearanceLevel;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // deployed_via - computed: true, optional: false, required: false
  public get deployedVia() {
    return this.getStringAttribute('deployed_via');
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // ephemeral_id - computed: true, optional: true, required: false
  private _ephemeralId?: boolean | cdktf.IResolvable; 
  public get ephemeralId() {
    return this.getBooleanAttribute('ephemeral_id');
  }
  public set ephemeralId(value: boolean | cdktf.IResolvable) {
    this._ephemeralId = value;
  }
  public resetEphemeralId() {
    this._ephemeralId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralIdInput() {
    return this._ephemeralId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_via - computed: true, optional: false, required: false
  public get lastModifiedVia() {
    return this.getStringAttribute('last_modified_via');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // modified_on - computed: true, optional: false, required: false
  public get modifiedOn() {
    return this.getStringAttribute('modified_on');
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

  // offlabel - computed: true, optional: true, required: false
  private _offlabel?: boolean | cdktf.IResolvable; 
  public get offlabel() {
    return this.getBooleanAttribute('offlabel');
  }
  public set offlabel(value: boolean | cdktf.IResolvable) {
    this._offlabel = value;
  }
  public resetOfflabel() {
    this._offlabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlabelInput() {
    return this._offlabel;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // page - computed: true, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // per_page - computed: true, optional: true, required: false
  private _perPage?: number; 
  public get perPage() {
    return this.getNumberAttribute('per_page');
  }
  public set perPage(value: number) {
    this._perPage = value;
  }
  public resetPerPage() {
    this._perPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPageInput() {
    return this._perPage;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // sitekey - computed: true, optional: false, required: false
  public get sitekey() {
    return this.getStringAttribute('sitekey');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bot_fight_mode: cdktf.booleanToTerraform(this._botFightMode),
      clearance_level: cdktf.stringToTerraform(this._clearanceLevel),
      direction: cdktf.stringToTerraform(this._direction),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      ephemeral_id: cdktf.booleanToTerraform(this._ephemeralId),
      filter: cdktf.stringToTerraform(this._filter),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      offlabel: cdktf.booleanToTerraform(this._offlabel),
      order: cdktf.stringToTerraform(this._order),
      page: cdktf.numberToTerraform(this._page),
      per_page: cdktf.numberToTerraform(this._perPage),
      region: cdktf.stringToTerraform(this._region),
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
      bot_fight_mode: {
        value: cdktf.booleanToHclTerraform(this._botFightMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clearance_level: {
        value: cdktf.stringToHclTerraform(this._clearanceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ephemeral_id: {
        value: cdktf.booleanToHclTerraform(this._ephemeralId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offlabel: {
        value: cdktf.booleanToHclTerraform(this._offlabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per_page: {
        value: cdktf.numberToHclTerraform(this._perPage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
