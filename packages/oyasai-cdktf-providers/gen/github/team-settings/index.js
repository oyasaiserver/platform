// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function teamSettingsReviewRequestDelegationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        algorithm: cdktf.stringToTerraform(struct.algorithm),
        member_count: cdktf.numberToTerraform(struct.memberCount),
        notify: cdktf.booleanToTerraform(struct.notify),
    };
}
export function teamSettingsReviewRequestDelegationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        algorithm: {
            value: cdktf.stringToHclTerraform(struct.algorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        member_count: {
            value: cdktf.numberToHclTerraform(struct.memberCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        notify: {
            value: cdktf.booleanToHclTerraform(struct.notify),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class TeamSettingsReviewRequestDelegationOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false, 0);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._algorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithm = this._algorithm;
        }
        if (this._memberCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.memberCount = this._memberCount;
        }
        if (this._notify !== undefined) {
            hasAnyValues = true;
            internalValueResult.notify = this._notify;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._algorithm = undefined;
            this._memberCount = undefined;
            this._notify = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._algorithm = value.algorithm;
            this._memberCount = value.memberCount;
            this._notify = value.notify;
        }
    }
    // algorithm - computed: false, optional: true, required: false
    _algorithm;
    get algorithm() {
        return this.getStringAttribute('algorithm');
    }
    set algorithm(value) {
        this._algorithm = value;
    }
    resetAlgorithm() {
        this._algorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get algorithmInput() {
        return this._algorithm;
    }
    // member_count - computed: false, optional: true, required: false
    _memberCount;
    get memberCount() {
        return this.getNumberAttribute('member_count');
    }
    set memberCount(value) {
        this._memberCount = value;
    }
    resetMemberCount() {
        this._memberCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get memberCountInput() {
        return this._memberCount;
    }
    // notify - computed: false, optional: true, required: false
    _notify;
    get notify() {
        return this.getBooleanAttribute('notify');
    }
    set notify(value) {
        this._notify = value;
    }
    resetNotify() {
        this._notify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notifyInput() {
        return this._notify;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings github_team_settings}
*/
export class TeamSettings extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "github_team_settings";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a TeamSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TeamSettings to import
    * @param importFromId The id of the existing TeamSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TeamSettings to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_settings", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings github_team_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TeamSettingsConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'github_team_settings',
            terraformGeneratorMetadata: {
                providerName: 'github',
                providerVersion: '6.12.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._id = config.id;
        this._notify = config.notify;
        this._teamId = config.teamId;
        this._reviewRequestDelegation.internalValue = config.reviewRequestDelegation;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // id - computed: true, optional: true, required: false
    _id;
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    // notify - computed: false, optional: true, required: false
    _notify;
    get notify() {
        return this.getBooleanAttribute('notify');
    }
    set notify(value) {
        this._notify = value;
    }
    resetNotify() {
        this._notify = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notifyInput() {
        return this._notify;
    }
    // team_id - computed: false, optional: false, required: true
    _teamId;
    get teamId() {
        return this.getStringAttribute('team_id');
    }
    set teamId(value) {
        this._teamId = value;
    }
    // Temporarily expose input value. Use with caution.
    get teamIdInput() {
        return this._teamId;
    }
    // team_slug - computed: true, optional: false, required: false
    get teamSlug() {
        return this.getStringAttribute('team_slug');
    }
    // team_uid - computed: true, optional: false, required: false
    get teamUid() {
        return this.getStringAttribute('team_uid');
    }
    // review_request_delegation - computed: false, optional: true, required: false
    _reviewRequestDelegation = new TeamSettingsReviewRequestDelegationOutputReference(this, "review_request_delegation");
    get reviewRequestDelegation() {
        return this._reviewRequestDelegation;
    }
    putReviewRequestDelegation(value) {
        this._reviewRequestDelegation.internalValue = value;
    }
    resetReviewRequestDelegation() {
        this._reviewRequestDelegation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get reviewRequestDelegationInput() {
        return this._reviewRequestDelegation.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            id: cdktf.stringToTerraform(this._id),
            notify: cdktf.booleanToTerraform(this._notify),
            team_id: cdktf.stringToTerraform(this._teamId),
            review_request_delegation: teamSettingsReviewRequestDelegationToTerraform(this._reviewRequestDelegation.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            id: {
                value: cdktf.stringToHclTerraform(this._id),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            notify: {
                value: cdktf.booleanToHclTerraform(this._notify),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            team_id: {
                value: cdktf.stringToHclTerraform(this._teamId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            review_request_delegation: {
                value: teamSettingsReviewRequestDelegationToHclTerraform(this._reviewRequestDelegation.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "TeamSettingsReviewRequestDelegationList",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
