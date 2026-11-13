// https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure blocking behavior for supported personal AI agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#ai_agents BotManagement#ai_agents}
  */
  readonly aiAgents?: BotManagementAiAgents;
  /**
  * Temporary migration flag tracking zones opted out of AI bots managed-rule updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#ai_bots_migration_opt_out BotManagement#ai_bots_migration_opt_out}
  */
  readonly aiBotsMigrationOptOut?: boolean | cdktf.IResolvable;
  /**
  * Enable rule to block AI Scrapers and Crawlers.
  * Available values: "block", "disabled", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}
  */
  readonly aiBotsProtection?: string;
  /**
  * Configure robots.txt policy for AI model training bots.
  * Available values: "disabled", "disallow", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#ai_training BotManagement#ai_training}
  */
  readonly aiTraining?: string;
  /**
  * Configure robots.txt policy for AI assistant and agent bots.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#ai_user BotManagement#ai_user}
  */
  readonly aiUser?: string;
  /**
  * Configure robots.txt policy for AI search bots.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#aisearch BotManagement#aisearch}
  */
  readonly aisearch?: string;
  /**
  * Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}
  */
  readonly autoUpdateModel?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}
  */
  readonly bmCookieEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Bot Preference Sync for this zone. When enabled, Cloudflare can serve robots.txt content derived from the zone's AI Search, AI User, and AI Training preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#bot_preference_sync_enabled BotManagement#bot_preference_sync_enabled}
  */
  readonly botPreferenceSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the Robots Access Control License variant to use.
  * Available values: "off", "policy_only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}
  */
  readonly cfRobotsVariant?: string;
  /**
  * Enable rule to block content bots. When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules.
  * Available values: "block", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#content_bots_protection BotManagement#content_bots_protection}
  */
  readonly contentBotsProtection?: string;
  /**
  * Enable rule to punish AI Scrapers and Crawlers via a link maze.
  * Available values: "enabled", "disabled".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}
  */
  readonly crawlerProtection?: string;
  /**
  * Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#enable_js BotManagement#enable_js}
  */
  readonly enableJs?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Bot Fight Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}
  */
  readonly fightMode?: boolean | cdktf.IResolvable;
  /**
  * Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}
  */
  readonly isRobotsTxtManaged?: boolean | cdktf.IResolvable;
  /**
  * Whether to use JavaScript Detection results submitted through the API for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#jsd_api_results_enabled BotManagement#jsd_api_results_enabled}
  */
  readonly jsdApiResultsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to optimize Super Bot Fight Mode protections for Wordpress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}
  */
  readonly optimizeWordpress?: boolean | cdktf.IResolvable;
  /**
  * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
  * Available values: "allow", "block", "managed_challenge".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}
  */
  readonly sbfmDefinitelyAutomated?: string;
  /**
  * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
  * Available values: "allow", "block", "managed_challenge".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}
  */
  readonly sbfmLikelyAutomated?: string;
  /**
  * Super Bot Fight Mode (SBFM) to enable static resource protection.
  * Enable if static resources on your application need bot protection.
  * Note: Static resource protection can also result in legitimate traffic being blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}
  */
  readonly sbfmStaticResourceProtection?: boolean | cdktf.IResolvable;
  /**
  * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
  * Available values: "allow", "block".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}
  */
  readonly sbfmVerifiedBots?: string;
  /**
  * Whether to disable tracking the highest bot score for a session in the Bot Management cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}
  */
  readonly suppressSessionScore?: boolean | cdktf.IResolvable;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#zone_id BotManagement#zone_id}
  */
  readonly zoneId: string;
}
export interface BotManagementAiAgents {
  /**
  * Action to apply to one supported personal AI agent.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#anthropic_agent BotManagement#anthropic_agent}
  */
  readonly anthropicAgent?: string;
  /**
  * Action to apply to one supported personal AI agent.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#google_agent BotManagement#google_agent}
  */
  readonly googleAgent?: string;
  /**
  * Action to apply to one supported personal AI agent.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#instinct BotManagement#instinct}
  */
  readonly instinct?: string;
  /**
  * Action to apply to one supported personal AI agent.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#muse BotManagement#muse}
  */
  readonly muse?: string;
  /**
  * Action to apply to one supported personal AI agent.
  * Available values: "disabled", "block", "only_on_ad_pages".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#openai_agent BotManagement#openai_agent}
  */
  readonly openaiAgent?: string;
}

export function botManagementAiAgentsToTerraform(struct?: BotManagementAiAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_agent: cdktf.stringToTerraform(struct!.anthropicAgent),
    google_agent: cdktf.stringToTerraform(struct!.googleAgent),
    instinct: cdktf.stringToTerraform(struct!.instinct),
    muse: cdktf.stringToTerraform(struct!.muse),
    openai_agent: cdktf.stringToTerraform(struct!.openaiAgent),
  }
}


export function botManagementAiAgentsToHclTerraform(struct?: BotManagementAiAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anthropic_agent: {
      value: cdktf.stringToHclTerraform(struct!.anthropicAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_agent: {
      value: cdktf.stringToHclTerraform(struct!.googleAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instinct: {
      value: cdktf.stringToHclTerraform(struct!.instinct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    muse: {
      value: cdktf.stringToHclTerraform(struct!.muse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openai_agent: {
      value: cdktf.stringToHclTerraform(struct!.openaiAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BotManagementAiAgentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BotManagementAiAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anthropicAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicAgent = this._anthropicAgent;
    }
    if (this._googleAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAgent = this._googleAgent;
    }
    if (this._instinct !== undefined) {
      hasAnyValues = true;
      internalValueResult.instinct = this._instinct;
    }
    if (this._muse !== undefined) {
      hasAnyValues = true;
      internalValueResult.muse = this._muse;
    }
    if (this._openaiAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiAgent = this._openaiAgent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotManagementAiAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anthropicAgent = undefined;
      this._googleAgent = undefined;
      this._instinct = undefined;
      this._muse = undefined;
      this._openaiAgent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anthropicAgent = value.anthropicAgent;
      this._googleAgent = value.googleAgent;
      this._instinct = value.instinct;
      this._muse = value.muse;
      this._openaiAgent = value.openaiAgent;
    }
  }

  // anthropic_agent - computed: true, optional: true, required: false
  private _anthropicAgent?: string; 
  public get anthropicAgent() {
    return this.getStringAttribute('anthropic_agent');
  }
  public set anthropicAgent(value: string) {
    this._anthropicAgent = value;
  }
  public resetAnthropicAgent() {
    this._anthropicAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicAgentInput() {
    return this._anthropicAgent;
  }

  // google_agent - computed: true, optional: true, required: false
  private _googleAgent?: string; 
  public get googleAgent() {
    return this.getStringAttribute('google_agent');
  }
  public set googleAgent(value: string) {
    this._googleAgent = value;
  }
  public resetGoogleAgent() {
    this._googleAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAgentInput() {
    return this._googleAgent;
  }

  // instinct - computed: true, optional: true, required: false
  private _instinct?: string; 
  public get instinct() {
    return this.getStringAttribute('instinct');
  }
  public set instinct(value: string) {
    this._instinct = value;
  }
  public resetInstinct() {
    this._instinct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instinctInput() {
    return this._instinct;
  }

  // muse - computed: true, optional: true, required: false
  private _muse?: string; 
  public get muse() {
    return this.getStringAttribute('muse');
  }
  public set muse(value: string) {
    this._muse = value;
  }
  public resetMuse() {
    this._muse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get museInput() {
    return this._muse;
  }

  // openai_agent - computed: true, optional: true, required: false
  private _openaiAgent?: string; 
  public get openaiAgent() {
    return this.getStringAttribute('openai_agent');
  }
  public set openaiAgent(value: string) {
    this._openaiAgent = value;
  }
  public resetOpenaiAgent() {
    this._openaiAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiAgentInput() {
    return this._openaiAgent;
  }
}
export interface BotManagementStaleZoneConfiguration {
}

export function botManagementStaleZoneConfigurationToTerraform(struct?: BotManagementStaleZoneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function botManagementStaleZoneConfigurationToHclTerraform(struct?: BotManagementStaleZoneConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BotManagementStaleZoneConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BotManagementStaleZoneConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BotManagementStaleZoneConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fight_mode - computed: true, optional: false, required: false
  public get fightMode() {
    return this.getBooleanAttribute('fight_mode');
  }

  // optimize_wordpress - computed: true, optional: false, required: false
  public get optimizeWordpress() {
    return this.getBooleanAttribute('optimize_wordpress');
  }

  // sbfm_definitely_automated - computed: true, optional: false, required: false
  public get sbfmDefinitelyAutomated() {
    return this.getStringAttribute('sbfm_definitely_automated');
  }

  // sbfm_likely_automated - computed: true, optional: false, required: false
  public get sbfmLikelyAutomated() {
    return this.getStringAttribute('sbfm_likely_automated');
  }

  // sbfm_static_resource_protection - computed: true, optional: false, required: false
  public get sbfmStaticResourceProtection() {
    return this.getStringAttribute('sbfm_static_resource_protection');
  }

  // sbfm_verified_bots - computed: true, optional: false, required: false
  public get sbfmVerifiedBots() {
    return this.getStringAttribute('sbfm_verified_bots');
  }

  // suppress_session_score - computed: true, optional: false, required: false
  public get suppressSessionScore() {
    return this.getBooleanAttribute('suppress_session_score');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management cloudflare_bot_management}
*/
export class BotManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_bot_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BotManagement to import
  * @param importFromId The id of the existing BotManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BotManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_bot_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/bot_management cloudflare_bot_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotManagementConfig
  */
  public constructor(scope: Construct, id: string, config: BotManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_bot_management',
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
    this._aiAgents.internalValue = config.aiAgents;
    this._aiBotsMigrationOptOut = config.aiBotsMigrationOptOut;
    this._aiBotsProtection = config.aiBotsProtection;
    this._aiTraining = config.aiTraining;
    this._aiUser = config.aiUser;
    this._aisearch = config.aisearch;
    this._autoUpdateModel = config.autoUpdateModel;
    this._bmCookieEnabled = config.bmCookieEnabled;
    this._botPreferenceSyncEnabled = config.botPreferenceSyncEnabled;
    this._cfRobotsVariant = config.cfRobotsVariant;
    this._contentBotsProtection = config.contentBotsProtection;
    this._crawlerProtection = config.crawlerProtection;
    this._enableJs = config.enableJs;
    this._fightMode = config.fightMode;
    this._isRobotsTxtManaged = config.isRobotsTxtManaged;
    this._jsdApiResultsEnabled = config.jsdApiResultsEnabled;
    this._optimizeWordpress = config.optimizeWordpress;
    this._sbfmDefinitelyAutomated = config.sbfmDefinitelyAutomated;
    this._sbfmLikelyAutomated = config.sbfmLikelyAutomated;
    this._sbfmStaticResourceProtection = config.sbfmStaticResourceProtection;
    this._sbfmVerifiedBots = config.sbfmVerifiedBots;
    this._suppressSessionScore = config.suppressSessionScore;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ai_agents - computed: true, optional: true, required: false
  private _aiAgents = new BotManagementAiAgentsOutputReference(this, "ai_agents");
  public get aiAgents() {
    return this._aiAgents;
  }
  public putAiAgents(value: BotManagementAiAgents) {
    this._aiAgents.internalValue = value;
  }
  public resetAiAgents() {
    this._aiAgents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiAgentsInput() {
    return this._aiAgents.internalValue;
  }

  // ai_bots_migration_opt_out - computed: true, optional: true, required: false
  private _aiBotsMigrationOptOut?: boolean | cdktf.IResolvable; 
  public get aiBotsMigrationOptOut() {
    return this.getBooleanAttribute('ai_bots_migration_opt_out');
  }
  public set aiBotsMigrationOptOut(value: boolean | cdktf.IResolvable) {
    this._aiBotsMigrationOptOut = value;
  }
  public resetAiBotsMigrationOptOut() {
    this._aiBotsMigrationOptOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBotsMigrationOptOutInput() {
    return this._aiBotsMigrationOptOut;
  }

  // ai_bots_protection - computed: true, optional: true, required: false
  private _aiBotsProtection?: string; 
  public get aiBotsProtection() {
    return this.getStringAttribute('ai_bots_protection');
  }
  public set aiBotsProtection(value: string) {
    this._aiBotsProtection = value;
  }
  public resetAiBotsProtection() {
    this._aiBotsProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBotsProtectionInput() {
    return this._aiBotsProtection;
  }

  // ai_training - computed: true, optional: true, required: false
  private _aiTraining?: string; 
  public get aiTraining() {
    return this.getStringAttribute('ai_training');
  }
  public set aiTraining(value: string) {
    this._aiTraining = value;
  }
  public resetAiTraining() {
    this._aiTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiTrainingInput() {
    return this._aiTraining;
  }

  // ai_user - computed: true, optional: true, required: false
  private _aiUser?: string; 
  public get aiUser() {
    return this.getStringAttribute('ai_user');
  }
  public set aiUser(value: string) {
    this._aiUser = value;
  }
  public resetAiUser() {
    this._aiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiUserInput() {
    return this._aiUser;
  }

  // aisearch - computed: true, optional: true, required: false
  private _aisearch?: string; 
  public get aisearch() {
    return this.getStringAttribute('aisearch');
  }
  public set aisearch(value: string) {
    this._aisearch = value;
  }
  public resetAisearch() {
    this._aisearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aisearchInput() {
    return this._aisearch;
  }

  // auto_update_model - computed: true, optional: true, required: false
  private _autoUpdateModel?: boolean | cdktf.IResolvable; 
  public get autoUpdateModel() {
    return this.getBooleanAttribute('auto_update_model');
  }
  public set autoUpdateModel(value: boolean | cdktf.IResolvable) {
    this._autoUpdateModel = value;
  }
  public resetAutoUpdateModel() {
    this._autoUpdateModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateModelInput() {
    return this._autoUpdateModel;
  }

  // bm_cookie_enabled - computed: true, optional: true, required: false
  private _bmCookieEnabled?: boolean | cdktf.IResolvable; 
  public get bmCookieEnabled() {
    return this.getBooleanAttribute('bm_cookie_enabled');
  }
  public set bmCookieEnabled(value: boolean | cdktf.IResolvable) {
    this._bmCookieEnabled = value;
  }
  public resetBmCookieEnabled() {
    this._bmCookieEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmCookieEnabledInput() {
    return this._bmCookieEnabled;
  }

  // bot_preference_sync_enabled - computed: false, optional: true, required: false
  private _botPreferenceSyncEnabled?: boolean | cdktf.IResolvable; 
  public get botPreferenceSyncEnabled() {
    return this.getBooleanAttribute('bot_preference_sync_enabled');
  }
  public set botPreferenceSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._botPreferenceSyncEnabled = value;
  }
  public resetBotPreferenceSyncEnabled() {
    this._botPreferenceSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botPreferenceSyncEnabledInput() {
    return this._botPreferenceSyncEnabled;
  }

  // cf_robots_variant - computed: true, optional: true, required: false
  private _cfRobotsVariant?: string; 
  public get cfRobotsVariant() {
    return this.getStringAttribute('cf_robots_variant');
  }
  public set cfRobotsVariant(value: string) {
    this._cfRobotsVariant = value;
  }
  public resetCfRobotsVariant() {
    this._cfRobotsVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfRobotsVariantInput() {
    return this._cfRobotsVariant;
  }

  // content_bots_protection - computed: true, optional: true, required: false
  private _contentBotsProtection?: string; 
  public get contentBotsProtection() {
    return this.getStringAttribute('content_bots_protection');
  }
  public set contentBotsProtection(value: string) {
    this._contentBotsProtection = value;
  }
  public resetContentBotsProtection() {
    this._contentBotsProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBotsProtectionInput() {
    return this._contentBotsProtection;
  }

  // crawler_protection - computed: true, optional: true, required: false
  private _crawlerProtection?: string; 
  public get crawlerProtection() {
    return this.getStringAttribute('crawler_protection');
  }
  public set crawlerProtection(value: string) {
    this._crawlerProtection = value;
  }
  public resetCrawlerProtection() {
    this._crawlerProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerProtectionInput() {
    return this._crawlerProtection;
  }

  // enable_js - computed: true, optional: true, required: false
  private _enableJs?: boolean | cdktf.IResolvable; 
  public get enableJs() {
    return this.getBooleanAttribute('enable_js');
  }
  public set enableJs(value: boolean | cdktf.IResolvable) {
    this._enableJs = value;
  }
  public resetEnableJs() {
    this._enableJs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJsInput() {
    return this._enableJs;
  }

  // fight_mode - computed: true, optional: true, required: false
  private _fightMode?: boolean | cdktf.IResolvable; 
  public get fightMode() {
    return this.getBooleanAttribute('fight_mode');
  }
  public set fightMode(value: boolean | cdktf.IResolvable) {
    this._fightMode = value;
  }
  public resetFightMode() {
    this._fightMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fightModeInput() {
    return this._fightMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_robots_txt_managed - computed: true, optional: true, required: false
  private _isRobotsTxtManaged?: boolean | cdktf.IResolvable; 
  public get isRobotsTxtManaged() {
    return this.getBooleanAttribute('is_robots_txt_managed');
  }
  public set isRobotsTxtManaged(value: boolean | cdktf.IResolvable) {
    this._isRobotsTxtManaged = value;
  }
  public resetIsRobotsTxtManaged() {
    this._isRobotsTxtManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRobotsTxtManagedInput() {
    return this._isRobotsTxtManaged;
  }

  // jsd_api_results_enabled - computed: true, optional: true, required: false
  private _jsdApiResultsEnabled?: boolean | cdktf.IResolvable; 
  public get jsdApiResultsEnabled() {
    return this.getBooleanAttribute('jsd_api_results_enabled');
  }
  public set jsdApiResultsEnabled(value: boolean | cdktf.IResolvable) {
    this._jsdApiResultsEnabled = value;
  }
  public resetJsdApiResultsEnabled() {
    this._jsdApiResultsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsdApiResultsEnabledInput() {
    return this._jsdApiResultsEnabled;
  }

  // optimize_wordpress - computed: true, optional: true, required: false
  private _optimizeWordpress?: boolean | cdktf.IResolvable; 
  public get optimizeWordpress() {
    return this.getBooleanAttribute('optimize_wordpress');
  }
  public set optimizeWordpress(value: boolean | cdktf.IResolvable) {
    this._optimizeWordpress = value;
  }
  public resetOptimizeWordpress() {
    this._optimizeWordpress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeWordpressInput() {
    return this._optimizeWordpress;
  }

  // sbfm_definitely_automated - computed: true, optional: true, required: false
  private _sbfmDefinitelyAutomated?: string; 
  public get sbfmDefinitelyAutomated() {
    return this.getStringAttribute('sbfm_definitely_automated');
  }
  public set sbfmDefinitelyAutomated(value: string) {
    this._sbfmDefinitelyAutomated = value;
  }
  public resetSbfmDefinitelyAutomated() {
    this._sbfmDefinitelyAutomated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmDefinitelyAutomatedInput() {
    return this._sbfmDefinitelyAutomated;
  }

  // sbfm_likely_automated - computed: true, optional: true, required: false
  private _sbfmLikelyAutomated?: string; 
  public get sbfmLikelyAutomated() {
    return this.getStringAttribute('sbfm_likely_automated');
  }
  public set sbfmLikelyAutomated(value: string) {
    this._sbfmLikelyAutomated = value;
  }
  public resetSbfmLikelyAutomated() {
    this._sbfmLikelyAutomated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmLikelyAutomatedInput() {
    return this._sbfmLikelyAutomated;
  }

  // sbfm_static_resource_protection - computed: true, optional: true, required: false
  private _sbfmStaticResourceProtection?: boolean | cdktf.IResolvable; 
  public get sbfmStaticResourceProtection() {
    return this.getBooleanAttribute('sbfm_static_resource_protection');
  }
  public set sbfmStaticResourceProtection(value: boolean | cdktf.IResolvable) {
    this._sbfmStaticResourceProtection = value;
  }
  public resetSbfmStaticResourceProtection() {
    this._sbfmStaticResourceProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmStaticResourceProtectionInput() {
    return this._sbfmStaticResourceProtection;
  }

  // sbfm_verified_bots - computed: true, optional: true, required: false
  private _sbfmVerifiedBots?: string; 
  public get sbfmVerifiedBots() {
    return this.getStringAttribute('sbfm_verified_bots');
  }
  public set sbfmVerifiedBots(value: string) {
    this._sbfmVerifiedBots = value;
  }
  public resetSbfmVerifiedBots() {
    this._sbfmVerifiedBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbfmVerifiedBotsInput() {
    return this._sbfmVerifiedBots;
  }

  // stale_zone_configuration - computed: true, optional: false, required: false
  private _staleZoneConfiguration = new BotManagementStaleZoneConfigurationOutputReference(this, "stale_zone_configuration");
  public get staleZoneConfiguration() {
    return this._staleZoneConfiguration;
  }

  // suppress_session_score - computed: true, optional: true, required: false
  private _suppressSessionScore?: boolean | cdktf.IResolvable; 
  public get suppressSessionScore() {
    return this.getBooleanAttribute('suppress_session_score');
  }
  public set suppressSessionScore(value: boolean | cdktf.IResolvable) {
    this._suppressSessionScore = value;
  }
  public resetSuppressSessionScore() {
    this._suppressSessionScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressSessionScoreInput() {
    return this._suppressSessionScore;
  }

  // using_latest_model - computed: true, optional: false, required: false
  public get usingLatestModel() {
    return this.getBooleanAttribute('using_latest_model');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ai_agents: botManagementAiAgentsToTerraform(this._aiAgents.internalValue),
      ai_bots_migration_opt_out: cdktf.booleanToTerraform(this._aiBotsMigrationOptOut),
      ai_bots_protection: cdktf.stringToTerraform(this._aiBotsProtection),
      ai_training: cdktf.stringToTerraform(this._aiTraining),
      ai_user: cdktf.stringToTerraform(this._aiUser),
      aisearch: cdktf.stringToTerraform(this._aisearch),
      auto_update_model: cdktf.booleanToTerraform(this._autoUpdateModel),
      bm_cookie_enabled: cdktf.booleanToTerraform(this._bmCookieEnabled),
      bot_preference_sync_enabled: cdktf.booleanToTerraform(this._botPreferenceSyncEnabled),
      cf_robots_variant: cdktf.stringToTerraform(this._cfRobotsVariant),
      content_bots_protection: cdktf.stringToTerraform(this._contentBotsProtection),
      crawler_protection: cdktf.stringToTerraform(this._crawlerProtection),
      enable_js: cdktf.booleanToTerraform(this._enableJs),
      fight_mode: cdktf.booleanToTerraform(this._fightMode),
      is_robots_txt_managed: cdktf.booleanToTerraform(this._isRobotsTxtManaged),
      jsd_api_results_enabled: cdktf.booleanToTerraform(this._jsdApiResultsEnabled),
      optimize_wordpress: cdktf.booleanToTerraform(this._optimizeWordpress),
      sbfm_definitely_automated: cdktf.stringToTerraform(this._sbfmDefinitelyAutomated),
      sbfm_likely_automated: cdktf.stringToTerraform(this._sbfmLikelyAutomated),
      sbfm_static_resource_protection: cdktf.booleanToTerraform(this._sbfmStaticResourceProtection),
      sbfm_verified_bots: cdktf.stringToTerraform(this._sbfmVerifiedBots),
      suppress_session_score: cdktf.booleanToTerraform(this._suppressSessionScore),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ai_agents: {
        value: botManagementAiAgentsToHclTerraform(this._aiAgents.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BotManagementAiAgents",
      },
      ai_bots_migration_opt_out: {
        value: cdktf.booleanToHclTerraform(this._aiBotsMigrationOptOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ai_bots_protection: {
        value: cdktf.stringToHclTerraform(this._aiBotsProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_training: {
        value: cdktf.stringToHclTerraform(this._aiTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ai_user: {
        value: cdktf.stringToHclTerraform(this._aiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aisearch: {
        value: cdktf.stringToHclTerraform(this._aisearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_update_model: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateModel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bm_cookie_enabled: {
        value: cdktf.booleanToHclTerraform(this._bmCookieEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bot_preference_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._botPreferenceSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cf_robots_variant: {
        value: cdktf.stringToHclTerraform(this._cfRobotsVariant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_bots_protection: {
        value: cdktf.stringToHclTerraform(this._contentBotsProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_protection: {
        value: cdktf.stringToHclTerraform(this._crawlerProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_js: {
        value: cdktf.booleanToHclTerraform(this._enableJs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fight_mode: {
        value: cdktf.booleanToHclTerraform(this._fightMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_robots_txt_managed: {
        value: cdktf.booleanToHclTerraform(this._isRobotsTxtManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jsd_api_results_enabled: {
        value: cdktf.booleanToHclTerraform(this._jsdApiResultsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optimize_wordpress: {
        value: cdktf.booleanToHclTerraform(this._optimizeWordpress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sbfm_definitely_automated: {
        value: cdktf.stringToHclTerraform(this._sbfmDefinitelyAutomated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sbfm_likely_automated: {
        value: cdktf.stringToHclTerraform(this._sbfmLikelyAutomated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sbfm_static_resource_protection: {
        value: cdktf.booleanToHclTerraform(this._sbfmStaticResourceProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sbfm_verified_bots: {
        value: cdktf.stringToHclTerraform(this._sbfmVerifiedBots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_session_score: {
        value: cdktf.booleanToHclTerraform(this._suppressSessionScore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
