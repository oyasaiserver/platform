import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TurnstileWidgetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#account_id TurnstileWidget#account_id}
    */
    readonly accountId?: string;
    /**
    * If bot_fight_mode is set to `true`, Cloudflare issues computationally
    * expensive challenges in response to malicious bots (ENT only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#bot_fight_mode TurnstileWidget#bot_fight_mode}
    */
    readonly botFightMode?: boolean | cdktf.IResolvable;
    /**
    * If Turnstile is embedded on a Cloudflare site and the widget should grant challenge clearance,
    * this setting can determine the clearance level to be set
    * Available values: "no_clearance", "jschallenge", "managed", "interactive".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#clearance_level TurnstileWidget#clearance_level}
    */
    readonly clearanceLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#domains TurnstileWidget#domains}
    */
    readonly domains: string[];
    /**
    * Return the Ephemeral ID in /siteverify (ENT only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#ephemeral_id TurnstileWidget#ephemeral_id}
    */
    readonly ephemeralId?: boolean | cdktf.IResolvable;
    /**
    * Widget Mode
    * Available values: "non-interactive", "invisible", "managed".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#mode TurnstileWidget#mode}
    */
    readonly mode: string;
    /**
    * Human readable widget name. Not unique. Cloudflare suggests that you
    * set this to a meaningful string to make it easier to identify your
    * widget, and where it is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#name TurnstileWidget#name}
    */
    readonly name: string;
    /**
    * Do not show any Cloudflare branding on the widget (ENT only).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#offlabel TurnstileWidget#offlabel}
    */
    readonly offlabel?: boolean | cdktf.IResolvable;
    /**
    * Region where this widget can be used. This cannot be changed after creation.
    * Available values: "world", "china".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#region TurnstileWidget#region}
    */
    readonly region?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget cloudflare_turnstile_widget}
*/
export declare class TurnstileWidget extends cdktf.TerraformResource {
    static readonly tfResourceType = "cloudflare_turnstile_widget";
    /**
    * Generates CDKTF code for importing a TurnstileWidget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TurnstileWidget to import
    * @param importFromId The id of the existing TurnstileWidget that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TurnstileWidget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): any;
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/turnstile_widget cloudflare_turnstile_widget} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TurnstileWidgetConfig
    */
    constructor(scope: Construct, id: string, config: TurnstileWidgetConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string;
    private _botFightMode?;
    get botFightMode(): boolean | cdktf.IResolvable;
    set botFightMode(value: boolean | cdktf.IResolvable);
    resetBotFightMode(): void;
    get botFightModeInput(): any;
    private _clearanceLevel?;
    get clearanceLevel(): string;
    set clearanceLevel(value: string);
    resetClearanceLevel(): void;
    get clearanceLevelInput(): string;
    get createdOn(): any;
    private _domains?;
    get domains(): string[];
    set domains(value: string[]);
    get domainsInput(): string[];
    private _ephemeralId?;
    get ephemeralId(): boolean | cdktf.IResolvable;
    set ephemeralId(value: boolean | cdktf.IResolvable);
    resetEphemeralId(): void;
    get ephemeralIdInput(): any;
    get id(): any;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string;
    get modifiedOn(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _offlabel?;
    get offlabel(): boolean | cdktf.IResolvable;
    set offlabel(value: boolean | cdktf.IResolvable);
    resetOfflabel(): void;
    get offlabelInput(): any;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string;
    get secret(): any;
    get sitekey(): any;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
