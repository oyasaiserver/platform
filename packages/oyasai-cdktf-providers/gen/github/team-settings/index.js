"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSettings = exports.TeamSettingsReviewRequestDelegationOutputReference = void 0;
exports.teamSettingsReviewRequestDelegationToTerraform = teamSettingsReviewRequestDelegationToTerraform;
exports.teamSettingsReviewRequestDelegationToHclTerraform = teamSettingsReviewRequestDelegationToHclTerraform;
var cdktf = require("cdktf");
function teamSettingsReviewRequestDelegationToTerraform(struct) {
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
function teamSettingsReviewRequestDelegationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
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
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var TeamSettingsReviewRequestDelegationOutputReference = /** @class */ (function (_super) {
    __extends(TeamSettingsReviewRequestDelegationOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function TeamSettingsReviewRequestDelegationOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
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
        },
        set: function (value) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "algorithm", {
        get: function () {
            return this.getStringAttribute('algorithm');
        },
        set: function (value) {
            this._algorithm = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamSettingsReviewRequestDelegationOutputReference.prototype.resetAlgorithm = function () {
        this._algorithm = undefined;
    };
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "algorithmInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._algorithm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "memberCount", {
        get: function () {
            return this.getNumberAttribute('member_count');
        },
        set: function (value) {
            this._memberCount = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamSettingsReviewRequestDelegationOutputReference.prototype.resetMemberCount = function () {
        this._memberCount = undefined;
    };
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "memberCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._memberCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "notify", {
        get: function () {
            return this.getBooleanAttribute('notify');
        },
        set: function (value) {
            this._notify = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamSettingsReviewRequestDelegationOutputReference.prototype.resetNotify = function () {
        this._notify = undefined;
    };
    Object.defineProperty(TeamSettingsReviewRequestDelegationOutputReference.prototype, "notifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notify;
        },
        enumerable: false,
        configurable: true
    });
    return TeamSettingsReviewRequestDelegationOutputReference;
}(cdktf.ComplexObject));
exports.TeamSettingsReviewRequestDelegationOutputReference = TeamSettingsReviewRequestDelegationOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/team_settings github_team_settings}
*/
var TeamSettings = /** @class */ (function (_super) {
    __extends(TeamSettings, _super);
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
    function TeamSettings(scope, id, config) {
        var _this = _super.call(this, scope, id, {
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
        }) || this;
        // review_request_delegation - computed: false, optional: true, required: false
        _this._reviewRequestDelegation = new TeamSettingsReviewRequestDelegationOutputReference(_this, "review_request_delegation");
        _this._id = config.id;
        _this._notify = config.notify;
        _this._teamId = config.teamId;
        _this._reviewRequestDelegation.internalValue = config.reviewRequestDelegation;
        return _this;
    }
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
    TeamSettings.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_team_settings", importId: importFromId, provider: provider });
    };
    Object.defineProperty(TeamSettings.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamSettings.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(TeamSettings.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettings.prototype, "notify", {
        get: function () {
            return this.getBooleanAttribute('notify');
        },
        set: function (value) {
            this._notify = value;
        },
        enumerable: false,
        configurable: true
    });
    TeamSettings.prototype.resetNotify = function () {
        this._notify = undefined;
    };
    Object.defineProperty(TeamSettings.prototype, "notifyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._notify;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettings.prototype, "teamId", {
        get: function () {
            return this.getStringAttribute('team_id');
        },
        set: function (value) {
            this._teamId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettings.prototype, "teamIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._teamId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettings.prototype, "teamSlug", {
        // team_slug - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team_slug');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettings.prototype, "teamUid", {
        // team_uid - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('team_uid');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamSettings.prototype, "reviewRequestDelegation", {
        get: function () {
            return this._reviewRequestDelegation;
        },
        enumerable: false,
        configurable: true
    });
    TeamSettings.prototype.putReviewRequestDelegation = function (value) {
        this._reviewRequestDelegation.internalValue = value;
    };
    TeamSettings.prototype.resetReviewRequestDelegation = function () {
        this._reviewRequestDelegation.internalValue = undefined;
    };
    Object.defineProperty(TeamSettings.prototype, "reviewRequestDelegationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewRequestDelegation.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    TeamSettings.prototype.synthesizeAttributes = function () {
        return {
            id: cdktf.stringToTerraform(this._id),
            notify: cdktf.booleanToTerraform(this._notify),
            team_id: cdktf.stringToTerraform(this._teamId),
            review_request_delegation: teamSettingsReviewRequestDelegationToTerraform(this._reviewRequestDelegation.internalValue),
        };
    };
    TeamSettings.prototype.synthesizeHclAttributes = function () {
        var attrs = {
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
        return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
            var _ = _a[0], value = _a[1];
            return value !== undefined && value.value !== undefined;
        }));
    };
    // =================
    // STATIC PROPERTIES
    // =================
    TeamSettings.tfResourceType = "github_team_settings";
    return TeamSettings;
}(cdktf.TerraformResource));
exports.TeamSettings = TeamSettings;
