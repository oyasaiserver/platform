"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset
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
exports.OrganizationRuleset = exports.OrganizationRulesetRulesOutputReference = exports.OrganizationRulesetRulesTagNamePatternOutputReference = exports.OrganizationRulesetRulesRequiredWorkflowsOutputReference = exports.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList = exports.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference = exports.OrganizationRulesetRulesRequiredStatusChecksOutputReference = exports.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList = exports.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference = exports.OrganizationRulesetRulesRequiredCodeScanningOutputReference = exports.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList = exports.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference = exports.OrganizationRulesetRulesPullRequestOutputReference = exports.OrganizationRulesetRulesPullRequestRequiredReviewersList = exports.OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference = exports.OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference = exports.OrganizationRulesetRulesMaxFileSizeOutputReference = exports.OrganizationRulesetRulesMaxFilePathLengthOutputReference = exports.OrganizationRulesetRulesFilePathRestrictionOutputReference = exports.OrganizationRulesetRulesFileExtensionRestrictionOutputReference = exports.OrganizationRulesetRulesCopilotCodeReviewOutputReference = exports.OrganizationRulesetRulesCommitterEmailPatternOutputReference = exports.OrganizationRulesetRulesCommitMessagePatternOutputReference = exports.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference = exports.OrganizationRulesetRulesBranchNamePatternOutputReference = exports.OrganizationRulesetConditionsOutputReference = exports.OrganizationRulesetConditionsRepositoryPropertyOutputReference = exports.OrganizationRulesetConditionsRepositoryPropertyIncludeList = exports.OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference = exports.OrganizationRulesetConditionsRepositoryPropertyExcludeList = exports.OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference = exports.OrganizationRulesetConditionsRepositoryNameOutputReference = exports.OrganizationRulesetConditionsRefNameOutputReference = exports.OrganizationRulesetBypassActorsList = exports.OrganizationRulesetBypassActorsOutputReference = void 0;
exports.organizationRulesetBypassActorsToTerraform = organizationRulesetBypassActorsToTerraform;
exports.organizationRulesetBypassActorsToHclTerraform = organizationRulesetBypassActorsToHclTerraform;
exports.organizationRulesetConditionsRefNameToTerraform = organizationRulesetConditionsRefNameToTerraform;
exports.organizationRulesetConditionsRefNameToHclTerraform = organizationRulesetConditionsRefNameToHclTerraform;
exports.organizationRulesetConditionsRepositoryNameToTerraform = organizationRulesetConditionsRepositoryNameToTerraform;
exports.organizationRulesetConditionsRepositoryNameToHclTerraform = organizationRulesetConditionsRepositoryNameToHclTerraform;
exports.organizationRulesetConditionsRepositoryPropertyExcludeToTerraform = organizationRulesetConditionsRepositoryPropertyExcludeToTerraform;
exports.organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform = organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform;
exports.organizationRulesetConditionsRepositoryPropertyIncludeToTerraform = organizationRulesetConditionsRepositoryPropertyIncludeToTerraform;
exports.organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform = organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform;
exports.organizationRulesetConditionsRepositoryPropertyToTerraform = organizationRulesetConditionsRepositoryPropertyToTerraform;
exports.organizationRulesetConditionsRepositoryPropertyToHclTerraform = organizationRulesetConditionsRepositoryPropertyToHclTerraform;
exports.organizationRulesetConditionsToTerraform = organizationRulesetConditionsToTerraform;
exports.organizationRulesetConditionsToHclTerraform = organizationRulesetConditionsToHclTerraform;
exports.organizationRulesetRulesBranchNamePatternToTerraform = organizationRulesetRulesBranchNamePatternToTerraform;
exports.organizationRulesetRulesBranchNamePatternToHclTerraform = organizationRulesetRulesBranchNamePatternToHclTerraform;
exports.organizationRulesetRulesCommitAuthorEmailPatternToTerraform = organizationRulesetRulesCommitAuthorEmailPatternToTerraform;
exports.organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform = organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform;
exports.organizationRulesetRulesCommitMessagePatternToTerraform = organizationRulesetRulesCommitMessagePatternToTerraform;
exports.organizationRulesetRulesCommitMessagePatternToHclTerraform = organizationRulesetRulesCommitMessagePatternToHclTerraform;
exports.organizationRulesetRulesCommitterEmailPatternToTerraform = organizationRulesetRulesCommitterEmailPatternToTerraform;
exports.organizationRulesetRulesCommitterEmailPatternToHclTerraform = organizationRulesetRulesCommitterEmailPatternToHclTerraform;
exports.organizationRulesetRulesCopilotCodeReviewToTerraform = organizationRulesetRulesCopilotCodeReviewToTerraform;
exports.organizationRulesetRulesCopilotCodeReviewToHclTerraform = organizationRulesetRulesCopilotCodeReviewToHclTerraform;
exports.organizationRulesetRulesFileExtensionRestrictionToTerraform = organizationRulesetRulesFileExtensionRestrictionToTerraform;
exports.organizationRulesetRulesFileExtensionRestrictionToHclTerraform = organizationRulesetRulesFileExtensionRestrictionToHclTerraform;
exports.organizationRulesetRulesFilePathRestrictionToTerraform = organizationRulesetRulesFilePathRestrictionToTerraform;
exports.organizationRulesetRulesFilePathRestrictionToHclTerraform = organizationRulesetRulesFilePathRestrictionToHclTerraform;
exports.organizationRulesetRulesMaxFilePathLengthToTerraform = organizationRulesetRulesMaxFilePathLengthToTerraform;
exports.organizationRulesetRulesMaxFilePathLengthToHclTerraform = organizationRulesetRulesMaxFilePathLengthToHclTerraform;
exports.organizationRulesetRulesMaxFileSizeToTerraform = organizationRulesetRulesMaxFileSizeToTerraform;
exports.organizationRulesetRulesMaxFileSizeToHclTerraform = organizationRulesetRulesMaxFileSizeToHclTerraform;
exports.organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform = organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform;
exports.organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform = organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform;
exports.organizationRulesetRulesPullRequestRequiredReviewersToTerraform = organizationRulesetRulesPullRequestRequiredReviewersToTerraform;
exports.organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform = organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform;
exports.organizationRulesetRulesPullRequestToTerraform = organizationRulesetRulesPullRequestToTerraform;
exports.organizationRulesetRulesPullRequestToHclTerraform = organizationRulesetRulesPullRequestToHclTerraform;
exports.organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform = organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform;
exports.organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform = organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform;
exports.organizationRulesetRulesRequiredCodeScanningToTerraform = organizationRulesetRulesRequiredCodeScanningToTerraform;
exports.organizationRulesetRulesRequiredCodeScanningToHclTerraform = organizationRulesetRulesRequiredCodeScanningToHclTerraform;
exports.organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform = organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform;
exports.organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform = organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform;
exports.organizationRulesetRulesRequiredStatusChecksToTerraform = organizationRulesetRulesRequiredStatusChecksToTerraform;
exports.organizationRulesetRulesRequiredStatusChecksToHclTerraform = organizationRulesetRulesRequiredStatusChecksToHclTerraform;
exports.organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform = organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform;
exports.organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform = organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform;
exports.organizationRulesetRulesRequiredWorkflowsToTerraform = organizationRulesetRulesRequiredWorkflowsToTerraform;
exports.organizationRulesetRulesRequiredWorkflowsToHclTerraform = organizationRulesetRulesRequiredWorkflowsToHclTerraform;
exports.organizationRulesetRulesTagNamePatternToTerraform = organizationRulesetRulesTagNamePatternToTerraform;
exports.organizationRulesetRulesTagNamePatternToHclTerraform = organizationRulesetRulesTagNamePatternToHclTerraform;
exports.organizationRulesetRulesToTerraform = organizationRulesetRulesToTerraform;
exports.organizationRulesetRulesToHclTerraform = organizationRulesetRulesToHclTerraform;
var cdktf = require("cdktf");
function organizationRulesetBypassActorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        actor_id: cdktf.numberToTerraform(struct.actorId),
        actor_type: cdktf.stringToTerraform(struct.actorType),
        bypass_mode: cdktf.stringToTerraform(struct.bypassMode),
    };
}
function organizationRulesetBypassActorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        actor_id: {
            value: cdktf.numberToHclTerraform(struct.actorId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        actor_type: {
            value: cdktf.stringToHclTerraform(struct.actorType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bypass_mode: {
            value: cdktf.stringToHclTerraform(struct.bypassMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetBypassActorsOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetBypassActorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetBypassActorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._actorId !== undefined) {
                hasAnyValues = true;
                internalValueResult.actorId = this._actorId;
            }
            if (this._actorType !== undefined) {
                hasAnyValues = true;
                internalValueResult.actorType = this._actorType;
            }
            if (this._bypassMode !== undefined) {
                hasAnyValues = true;
                internalValueResult.bypassMode = this._bypassMode;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._actorId = undefined;
                this._actorType = undefined;
                this._bypassMode = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._actorId = value.actorId;
                this._actorType = value.actorType;
                this._bypassMode = value.bypassMode;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "actorId", {
        get: function () {
            return this.getNumberAttribute('actor_id');
        },
        set: function (value) {
            this._actorId = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetBypassActorsOutputReference.prototype.resetActorId = function () {
        this._actorId = undefined;
    };
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "actorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "actorType", {
        get: function () {
            return this.getStringAttribute('actor_type');
        },
        set: function (value) {
            this._actorType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "actorTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actorType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "bypassMode", {
        get: function () {
            return this.getStringAttribute('bypass_mode');
        },
        set: function (value) {
            this._bypassMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetBypassActorsOutputReference.prototype, "bypassModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassMode;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetBypassActorsOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetBypassActorsOutputReference = OrganizationRulesetBypassActorsOutputReference;
var OrganizationRulesetBypassActorsList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetBypassActorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetBypassActorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetBypassActorsList.prototype.get = function (index) {
        return new OrganizationRulesetBypassActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetBypassActorsList;
}(cdktf.ComplexList));
exports.OrganizationRulesetBypassActorsList = OrganizationRulesetBypassActorsList;
function organizationRulesetConditionsRefNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
    };
}
function organizationRulesetConditionsRefNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exclude),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.include),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetConditionsRefNameOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRefNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetConditionsRefNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetConditionsRefNameOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._exclude !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = this._exclude;
            }
            if (this._include !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = this._include;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._exclude = undefined;
                this._include = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._exclude = value.exclude;
                this._include = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRefNameOutputReference.prototype, "exclude", {
        get: function () {
            return this.getListAttribute('exclude');
        },
        set: function (value) {
            this._exclude = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRefNameOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRefNameOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRefNameOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetConditionsRefNameOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetConditionsRefNameOutputReference = OrganizationRulesetConditionsRefNameOutputReference;
function organizationRulesetConditionsRepositoryNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.include),
        protected: cdktf.booleanToTerraform(struct.protected),
    };
}
function organizationRulesetConditionsRepositoryNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.exclude),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.include),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        protected: {
            value: cdktf.booleanToHclTerraform(struct.protected),
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
var OrganizationRulesetConditionsRepositoryNameOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRepositoryNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetConditionsRepositoryNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._exclude !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = this._exclude;
            }
            if (this._include !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = this._include;
            }
            if (this._protected !== undefined) {
                hasAnyValues = true;
                internalValueResult.protected = this._protected;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._exclude = undefined;
                this._include = undefined;
                this._protected = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._exclude = value.exclude;
                this._include = value.include;
                this._protected = value.protected;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "exclude", {
        get: function () {
            return this.getListAttribute('exclude');
        },
        set: function (value) {
            this._exclude = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "protected", {
        get: function () {
            return this.getBooleanAttribute('protected');
        },
        set: function (value) {
            this._protected = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryNameOutputReference.prototype.resetProtected = function () {
        this._protected = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryNameOutputReference.prototype, "protectedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._protected;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetConditionsRepositoryNameOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetConditionsRepositoryNameOutputReference = OrganizationRulesetConditionsRepositoryNameOutputReference;
function organizationRulesetConditionsRepositoryPropertyExcludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        property_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.propertyValues),
        source: cdktf.stringToTerraform(struct.source),
    };
}
function organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.propertyValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._propertyValues !== undefined) {
                hasAnyValues = true;
                internalValueResult.propertyValues = this._propertyValues;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._propertyValues = undefined;
                this._source = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._propertyValues = value.propertyValues;
                this._source = value.source;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "propertyValues", {
        get: function () {
            return this.getListAttribute('property_values');
        },
        set: function (value) {
            this._propertyValues = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype.resetPropertyValues = function () {
        this._propertyValues = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "propertyValuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propertyValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference = OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference;
var OrganizationRulesetConditionsRepositoryPropertyExcludeList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRepositoryPropertyExcludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetConditionsRepositoryPropertyExcludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetConditionsRepositoryPropertyExcludeList.prototype.get = function (index) {
        return new OrganizationRulesetConditionsRepositoryPropertyExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetConditionsRepositoryPropertyExcludeList;
}(cdktf.ComplexList));
exports.OrganizationRulesetConditionsRepositoryPropertyExcludeList = OrganizationRulesetConditionsRepositoryPropertyExcludeList;
function organizationRulesetConditionsRepositoryPropertyIncludeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        property_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.propertyValues),
        source: cdktf.stringToTerraform(struct.source),
    };
}
function organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        property_values: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.propertyValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source: {
            value: cdktf.stringToHclTerraform(struct.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._propertyValues !== undefined) {
                hasAnyValues = true;
                internalValueResult.propertyValues = this._propertyValues;
            }
            if (this._source !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = this._source;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._name = undefined;
                this._propertyValues = undefined;
                this._source = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._name = value.name;
                this._propertyValues = value.propertyValues;
                this._source = value.source;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "propertyValues", {
        get: function () {
            return this.getListAttribute('property_values');
        },
        set: function (value) {
            this._propertyValues = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype.resetPropertyValues = function () {
        this._propertyValues = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "propertyValuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._propertyValues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "source", {
        get: function () {
            return this.getStringAttribute('source');
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype.resetSource = function () {
        this._source = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference = OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference;
var OrganizationRulesetConditionsRepositoryPropertyIncludeList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRepositoryPropertyIncludeList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetConditionsRepositoryPropertyIncludeList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetConditionsRepositoryPropertyIncludeList.prototype.get = function (index) {
        return new OrganizationRulesetConditionsRepositoryPropertyIncludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetConditionsRepositoryPropertyIncludeList;
}(cdktf.ComplexList));
exports.OrganizationRulesetConditionsRepositoryPropertyIncludeList = OrganizationRulesetConditionsRepositoryPropertyIncludeList;
function organizationRulesetConditionsRepositoryPropertyToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        exclude: cdktf.listMapper(organizationRulesetConditionsRepositoryPropertyExcludeToTerraform, false)(struct.exclude),
        include: cdktf.listMapper(organizationRulesetConditionsRepositoryPropertyIncludeToTerraform, false)(struct.include),
    };
}
function organizationRulesetConditionsRepositoryPropertyToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        exclude: {
            value: cdktf.listMapperHcl(organizationRulesetConditionsRepositoryPropertyExcludeToHclTerraform, false)(struct.exclude),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetConditionsRepositoryPropertyExcludeList",
        },
        include: {
            value: cdktf.listMapperHcl(organizationRulesetConditionsRepositoryPropertyIncludeToHclTerraform, false)(struct.include),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetConditionsRepositoryPropertyIncludeList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetConditionsRepositoryPropertyOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsRepositoryPropertyOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetConditionsRepositoryPropertyOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // exclude - computed: false, optional: true, required: false
        _this._exclude = new OrganizationRulesetConditionsRepositoryPropertyExcludeList(_this, "exclude", false);
        // include - computed: false, optional: true, required: false
        _this._include = new OrganizationRulesetConditionsRepositoryPropertyIncludeList(_this, "include", false);
        return _this;
    }
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._exclude) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.exclude = (_b = this._exclude) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._include) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.include = (_d = this._include) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._exclude.internalValue = undefined;
                this._include.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._exclude.internalValue = value.exclude;
                this._include.internalValue = value.include;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype, "exclude", {
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype.putExclude = function (value) {
        this._exclude.internalValue = value;
    };
    OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype.resetExclude = function () {
        this._exclude.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype, "include", {
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype.putInclude = function (value) {
        this._include.internalValue = value;
    };
    OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype.resetInclude = function () {
        this._include.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsRepositoryPropertyOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetConditionsRepositoryPropertyOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetConditionsRepositoryPropertyOutputReference = OrganizationRulesetConditionsRepositoryPropertyOutputReference;
function organizationRulesetConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        repository_id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct.repositoryId),
        ref_name: organizationRulesetConditionsRefNameToTerraform(struct.refName),
        repository_name: organizationRulesetConditionsRepositoryNameToTerraform(struct.repositoryName),
        repository_property: organizationRulesetConditionsRepositoryPropertyToTerraform(struct.repositoryProperty),
    };
}
function organizationRulesetConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        repository_id: {
            value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct.repositoryId),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        ref_name: {
            value: organizationRulesetConditionsRefNameToHclTerraform(struct.refName),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetConditionsRefNameList",
        },
        repository_name: {
            value: organizationRulesetConditionsRepositoryNameToHclTerraform(struct.repositoryName),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetConditionsRepositoryNameList",
        },
        repository_property: {
            value: organizationRulesetConditionsRepositoryPropertyToHclTerraform(struct.repositoryProperty),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetConditionsRepositoryPropertyList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetConditionsOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetConditionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetConditionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // ref_name - computed: false, optional: true, required: false
        _this._refName = new OrganizationRulesetConditionsRefNameOutputReference(_this, "ref_name");
        // repository_name - computed: false, optional: true, required: false
        _this._repositoryName = new OrganizationRulesetConditionsRepositoryNameOutputReference(_this, "repository_name");
        // repository_property - computed: false, optional: true, required: false
        _this._repositoryProperty = new OrganizationRulesetConditionsRepositoryPropertyOutputReference(_this, "repository_property");
        return _this;
    }
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._repositoryId !== undefined) {
                hasAnyValues = true;
                internalValueResult.repositoryId = this._repositoryId;
            }
            if (((_a = this._refName) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.refName = (_b = this._refName) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._repositoryName) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.repositoryName = (_d = this._repositoryName) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._repositoryProperty) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.repositoryProperty = (_f = this._repositoryProperty) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._repositoryId = undefined;
                this._refName.internalValue = undefined;
                this._repositoryName.internalValue = undefined;
                this._repositoryProperty.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._repositoryId = value.repositoryId;
                this._refName.internalValue = value.refName;
                this._repositoryName.internalValue = value.repositoryName;
                this._repositoryProperty.internalValue = value.repositoryProperty;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "repositoryId", {
        get: function () {
            return this.getNumberListAttribute('repository_id');
        },
        set: function (value) {
            this._repositoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsOutputReference.prototype.resetRepositoryId = function () {
        this._repositoryId = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "repositoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "refName", {
        get: function () {
            return this._refName;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsOutputReference.prototype.putRefName = function (value) {
        this._refName.internalValue = value;
    };
    OrganizationRulesetConditionsOutputReference.prototype.resetRefName = function () {
        this._refName.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "refNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._refName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "repositoryName", {
        get: function () {
            return this._repositoryName;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsOutputReference.prototype.putRepositoryName = function (value) {
        this._repositoryName.internalValue = value;
    };
    OrganizationRulesetConditionsOutputReference.prototype.resetRepositoryName = function () {
        this._repositoryName.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "repositoryNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "repositoryProperty", {
        get: function () {
            return this._repositoryProperty;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetConditionsOutputReference.prototype.putRepositoryProperty = function (value) {
        this._repositoryProperty.internalValue = value;
    };
    OrganizationRulesetConditionsOutputReference.prototype.resetRepositoryProperty = function () {
        this._repositoryProperty.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetConditionsOutputReference.prototype, "repositoryPropertyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryProperty.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetConditionsOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetConditionsOutputReference = OrganizationRulesetConditionsOutputReference;
function organizationRulesetRulesBranchNamePatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
function organizationRulesetRulesBranchNamePatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesBranchNamePatternOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesBranchNamePatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesBranchNamePatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._negate !== undefined) {
                hasAnyValues = true;
                internalValueResult.negate = this._negate;
            }
            if (this._operator !== undefined) {
                hasAnyValues = true;
                internalValueResult.operator = this._operator;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._name = undefined;
                this._negate = undefined;
                this._operator = undefined;
                this._pattern = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._name = value.name;
                this._negate = value.negate;
                this._operator = value.operator;
                this._pattern = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesBranchNamePatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesBranchNamePatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesBranchNamePatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesBranchNamePatternOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesBranchNamePatternOutputReference = OrganizationRulesetRulesBranchNamePatternOutputReference;
function organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
function organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._negate !== undefined) {
                hasAnyValues = true;
                internalValueResult.negate = this._negate;
            }
            if (this._operator !== undefined) {
                hasAnyValues = true;
                internalValueResult.operator = this._operator;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._name = undefined;
                this._negate = undefined;
                this._operator = undefined;
                this._pattern = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._name = value.name;
                this._negate = value.negate;
                this._operator = value.operator;
                this._pattern = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference = OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference;
function organizationRulesetRulesCommitMessagePatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
function organizationRulesetRulesCommitMessagePatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesCommitMessagePatternOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesCommitMessagePatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesCommitMessagePatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._negate !== undefined) {
                hasAnyValues = true;
                internalValueResult.negate = this._negate;
            }
            if (this._operator !== undefined) {
                hasAnyValues = true;
                internalValueResult.operator = this._operator;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._name = undefined;
                this._negate = undefined;
                this._operator = undefined;
                this._pattern = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._name = value.name;
                this._negate = value.negate;
                this._operator = value.operator;
                this._pattern = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitMessagePatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesCommitMessagePatternOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesCommitMessagePatternOutputReference = OrganizationRulesetRulesCommitMessagePatternOutputReference;
function organizationRulesetRulesCommitterEmailPatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
function organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesCommitterEmailPatternOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesCommitterEmailPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesCommitterEmailPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._negate !== undefined) {
                hasAnyValues = true;
                internalValueResult.negate = this._negate;
            }
            if (this._operator !== undefined) {
                hasAnyValues = true;
                internalValueResult.operator = this._operator;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._name = undefined;
                this._negate = undefined;
                this._operator = undefined;
                this._pattern = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._name = value.name;
                this._negate = value.negate;
                this._operator = value.operator;
                this._pattern = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCommitterEmailPatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesCommitterEmailPatternOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesCommitterEmailPatternOutputReference = OrganizationRulesetRulesCommitterEmailPatternOutputReference;
function organizationRulesetRulesCopilotCodeReviewToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        review_draft_pull_requests: cdktf.booleanToTerraform(struct.reviewDraftPullRequests),
        review_on_push: cdktf.booleanToTerraform(struct.reviewOnPush),
    };
}
function organizationRulesetRulesCopilotCodeReviewToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        review_draft_pull_requests: {
            value: cdktf.booleanToHclTerraform(struct.reviewDraftPullRequests),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        review_on_push: {
            value: cdktf.booleanToHclTerraform(struct.reviewOnPush),
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
var OrganizationRulesetRulesCopilotCodeReviewOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesCopilotCodeReviewOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesCopilotCodeReviewOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._reviewDraftPullRequests !== undefined) {
                hasAnyValues = true;
                internalValueResult.reviewDraftPullRequests = this._reviewDraftPullRequests;
            }
            if (this._reviewOnPush !== undefined) {
                hasAnyValues = true;
                internalValueResult.reviewOnPush = this._reviewOnPush;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._reviewDraftPullRequests = undefined;
                this._reviewOnPush = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._reviewDraftPullRequests = value.reviewDraftPullRequests;
                this._reviewOnPush = value.reviewOnPush;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewDraftPullRequests", {
        get: function () {
            return this.getBooleanAttribute('review_draft_pull_requests');
        },
        set: function (value) {
            this._reviewDraftPullRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype.resetReviewDraftPullRequests = function () {
        this._reviewDraftPullRequests = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewDraftPullRequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewDraftPullRequests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewOnPush", {
        get: function () {
            return this.getBooleanAttribute('review_on_push');
        },
        set: function (value) {
            this._reviewOnPush = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype.resetReviewOnPush = function () {
        this._reviewOnPush = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewOnPushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewOnPush;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesCopilotCodeReviewOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesCopilotCodeReviewOutputReference = OrganizationRulesetRulesCopilotCodeReviewOutputReference;
function organizationRulesetRulesFileExtensionRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restricted_file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.restrictedFileExtensions),
    };
}
function organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        restricted_file_extensions: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.restrictedFileExtensions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesFileExtensionRestrictionOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesFileExtensionRestrictionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesFileExtensionRestrictionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesFileExtensionRestrictionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._restrictedFileExtensions !== undefined) {
                hasAnyValues = true;
                internalValueResult.restrictedFileExtensions = this._restrictedFileExtensions;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._restrictedFileExtensions = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._restrictedFileExtensions = value.restrictedFileExtensions;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesFileExtensionRestrictionOutputReference.prototype, "restrictedFileExtensions", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('restricted_file_extensions'));
        },
        set: function (value) {
            this._restrictedFileExtensions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesFileExtensionRestrictionOutputReference.prototype, "restrictedFileExtensionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictedFileExtensions;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesFileExtensionRestrictionOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesFileExtensionRestrictionOutputReference = OrganizationRulesetRulesFileExtensionRestrictionOutputReference;
function organizationRulesetRulesFilePathRestrictionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restricted_file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.restrictedFilePaths),
    };
}
function organizationRulesetRulesFilePathRestrictionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        restricted_file_paths: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.restrictedFilePaths),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesFilePathRestrictionOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesFilePathRestrictionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesFilePathRestrictionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesFilePathRestrictionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._restrictedFilePaths !== undefined) {
                hasAnyValues = true;
                internalValueResult.restrictedFilePaths = this._restrictedFilePaths;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._restrictedFilePaths = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._restrictedFilePaths = value.restrictedFilePaths;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesFilePathRestrictionOutputReference.prototype, "restrictedFilePaths", {
        get: function () {
            return this.getListAttribute('restricted_file_paths');
        },
        set: function (value) {
            this._restrictedFilePaths = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesFilePathRestrictionOutputReference.prototype, "restrictedFilePathsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictedFilePaths;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesFilePathRestrictionOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesFilePathRestrictionOutputReference = OrganizationRulesetRulesFilePathRestrictionOutputReference;
function organizationRulesetRulesMaxFilePathLengthToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_file_path_length: cdktf.numberToTerraform(struct.maxFilePathLength),
    };
}
function organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        max_file_path_length: {
            value: cdktf.numberToHclTerraform(struct.maxFilePathLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesMaxFilePathLengthOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesMaxFilePathLengthOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesMaxFilePathLengthOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesMaxFilePathLengthOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._maxFilePathLength !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxFilePathLength = this._maxFilePathLength;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._maxFilePathLength = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._maxFilePathLength = value.maxFilePathLength;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesMaxFilePathLengthOutputReference.prototype, "maxFilePathLength", {
        get: function () {
            return this.getNumberAttribute('max_file_path_length');
        },
        set: function (value) {
            this._maxFilePathLength = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesMaxFilePathLengthOutputReference.prototype, "maxFilePathLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFilePathLength;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesMaxFilePathLengthOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesMaxFilePathLengthOutputReference = OrganizationRulesetRulesMaxFilePathLengthOutputReference;
function organizationRulesetRulesMaxFileSizeToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        max_file_size: cdktf.numberToTerraform(struct.maxFileSize),
    };
}
function organizationRulesetRulesMaxFileSizeToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        max_file_size: {
            value: cdktf.numberToHclTerraform(struct.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesMaxFileSizeOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesMaxFileSizeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesMaxFileSizeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesMaxFileSizeOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._maxFileSize !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxFileSize = this._maxFileSize;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._maxFileSize = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._maxFileSize = value.maxFileSize;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesMaxFileSizeOutputReference.prototype, "maxFileSize", {
        get: function () {
            return this.getNumberAttribute('max_file_size');
        },
        set: function (value) {
            this._maxFileSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesMaxFileSizeOutputReference.prototype, "maxFileSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFileSize;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesMaxFileSizeOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesMaxFileSizeOutputReference = OrganizationRulesetRulesMaxFileSizeOutputReference;
function organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        id: cdktf.numberToTerraform(struct.id),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        id: {
            value: cdktf.numberToHclTerraform(struct.id),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        type: {
            value: cdktf.stringToHclTerraform(struct.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._id !== undefined) {
                hasAnyValues = true;
                internalValueResult.id = this._id;
            }
            if (this._type !== undefined) {
                hasAnyValues = true;
                internalValueResult.type = this._type;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._id = undefined;
                this._type = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._id = value.id;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "id", {
        get: function () {
            return this.getNumberAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference = OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference;
function organizationRulesetRulesPullRequestRequiredReviewersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.filePatterns),
        minimum_approvals: cdktf.numberToTerraform(struct.minimumApprovals),
        reviewer: organizationRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct.reviewer),
    };
}
function organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        file_patterns: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.filePatterns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        minimum_approvals: {
            value: cdktf.numberToHclTerraform(struct.minimumApprovals),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        reviewer: {
            value: organizationRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct.reviewer),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesPullRequestRequiredReviewersReviewerList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // reviewer - computed: false, optional: false, required: true
        _this._reviewer = new OrganizationRulesetRulesPullRequestRequiredReviewersReviewerOutputReference(_this, "reviewer");
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._filePatterns !== undefined) {
                hasAnyValues = true;
                internalValueResult.filePatterns = this._filePatterns;
            }
            if (this._minimumApprovals !== undefined) {
                hasAnyValues = true;
                internalValueResult.minimumApprovals = this._minimumApprovals;
            }
            if (((_a = this._reviewer) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.reviewer = (_b = this._reviewer) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._filePatterns = undefined;
                this._minimumApprovals = undefined;
                this._reviewer.internalValue = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._filePatterns = value.filePatterns;
                this._minimumApprovals = value.minimumApprovals;
                this._reviewer.internalValue = value.reviewer;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "filePatterns", {
        get: function () {
            return this.getListAttribute('file_patterns');
        },
        set: function (value) {
            this._filePatterns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "filePatternsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filePatterns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "minimumApprovals", {
        get: function () {
            return this.getNumberAttribute('minimum_approvals');
        },
        set: function (value) {
            this._minimumApprovals = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "minimumApprovalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumApprovals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "reviewer", {
        get: function () {
            return this._reviewer;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype.putReviewer = function (value) {
        this._reviewer.internalValue = value;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "reviewerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewer.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference = OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference;
var OrganizationRulesetRulesPullRequestRequiredReviewersList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesPullRequestRequiredReviewersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesPullRequestRequiredReviewersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetRulesPullRequestRequiredReviewersList.prototype.get = function (index) {
        return new OrganizationRulesetRulesPullRequestRequiredReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetRulesPullRequestRequiredReviewersList;
}(cdktf.ComplexList));
exports.OrganizationRulesetRulesPullRequestRequiredReviewersList = OrganizationRulesetRulesPullRequestRequiredReviewersList;
function organizationRulesetRulesPullRequestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        allowed_merge_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.allowedMergeMethods),
        dismiss_stale_reviews_on_push: cdktf.booleanToTerraform(struct.dismissStaleReviewsOnPush),
        require_code_owner_review: cdktf.booleanToTerraform(struct.requireCodeOwnerReview),
        require_last_push_approval: cdktf.booleanToTerraform(struct.requireLastPushApproval),
        required_approving_review_count: cdktf.numberToTerraform(struct.requiredApprovingReviewCount),
        required_review_thread_resolution: cdktf.booleanToTerraform(struct.requiredReviewThreadResolution),
        required_reviewers: cdktf.listMapper(organizationRulesetRulesPullRequestRequiredReviewersToTerraform, true)(struct.requiredReviewers),
    };
}
function organizationRulesetRulesPullRequestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        allowed_merge_methods: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.allowedMergeMethods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        dismiss_stale_reviews_on_push: {
            value: cdktf.booleanToHclTerraform(struct.dismissStaleReviewsOnPush),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_code_owner_review: {
            value: cdktf.booleanToHclTerraform(struct.requireCodeOwnerReview),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        require_last_push_approval: {
            value: cdktf.booleanToHclTerraform(struct.requireLastPushApproval),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_approving_review_count: {
            value: cdktf.numberToHclTerraform(struct.requiredApprovingReviewCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        required_review_thread_resolution: {
            value: cdktf.booleanToHclTerraform(struct.requiredReviewThreadResolution),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_reviewers: {
            value: cdktf.listMapperHcl(organizationRulesetRulesPullRequestRequiredReviewersToHclTerraform, true)(struct.requiredReviewers),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesPullRequestRequiredReviewersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesPullRequestOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesPullRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesPullRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_reviewers - computed: false, optional: true, required: false
        _this._requiredReviewers = new OrganizationRulesetRulesPullRequestRequiredReviewersList(_this, "required_reviewers", false);
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._allowedMergeMethods !== undefined) {
                hasAnyValues = true;
                internalValueResult.allowedMergeMethods = this._allowedMergeMethods;
            }
            if (this._dismissStaleReviewsOnPush !== undefined) {
                hasAnyValues = true;
                internalValueResult.dismissStaleReviewsOnPush = this._dismissStaleReviewsOnPush;
            }
            if (this._requireCodeOwnerReview !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireCodeOwnerReview = this._requireCodeOwnerReview;
            }
            if (this._requireLastPushApproval !== undefined) {
                hasAnyValues = true;
                internalValueResult.requireLastPushApproval = this._requireLastPushApproval;
            }
            if (this._requiredApprovingReviewCount !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredApprovingReviewCount = this._requiredApprovingReviewCount;
            }
            if (this._requiredReviewThreadResolution !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredReviewThreadResolution = this._requiredReviewThreadResolution;
            }
            if (((_a = this._requiredReviewers) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredReviewers = (_b = this._requiredReviewers) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._allowedMergeMethods = undefined;
                this._dismissStaleReviewsOnPush = undefined;
                this._requireCodeOwnerReview = undefined;
                this._requireLastPushApproval = undefined;
                this._requiredApprovingReviewCount = undefined;
                this._requiredReviewThreadResolution = undefined;
                this._requiredReviewers.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._allowedMergeMethods = value.allowedMergeMethods;
                this._dismissStaleReviewsOnPush = value.dismissStaleReviewsOnPush;
                this._requireCodeOwnerReview = value.requireCodeOwnerReview;
                this._requireLastPushApproval = value.requireLastPushApproval;
                this._requiredApprovingReviewCount = value.requiredApprovingReviewCount;
                this._requiredReviewThreadResolution = value.requiredReviewThreadResolution;
                this._requiredReviewers.internalValue = value.requiredReviewers;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "allowedMergeMethods", {
        get: function () {
            return this.getListAttribute('allowed_merge_methods');
        },
        set: function (value) {
            this._allowedMergeMethods = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetAllowedMergeMethods = function () {
        this._allowedMergeMethods = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "allowedMergeMethodsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedMergeMethods;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "dismissStaleReviewsOnPush", {
        get: function () {
            return this.getBooleanAttribute('dismiss_stale_reviews_on_push');
        },
        set: function (value) {
            this._dismissStaleReviewsOnPush = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetDismissStaleReviewsOnPush = function () {
        this._dismissStaleReviewsOnPush = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "dismissStaleReviewsOnPushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissStaleReviewsOnPush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requireCodeOwnerReview", {
        get: function () {
            return this.getBooleanAttribute('require_code_owner_review');
        },
        set: function (value) {
            this._requireCodeOwnerReview = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetRequireCodeOwnerReview = function () {
        this._requireCodeOwnerReview = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requireCodeOwnerReviewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireCodeOwnerReview;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requireLastPushApproval", {
        get: function () {
            return this.getBooleanAttribute('require_last_push_approval');
        },
        set: function (value) {
            this._requireLastPushApproval = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetRequireLastPushApproval = function () {
        this._requireLastPushApproval = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requireLastPushApprovalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireLastPushApproval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requiredApprovingReviewCount", {
        get: function () {
            return this.getNumberAttribute('required_approving_review_count');
        },
        set: function (value) {
            this._requiredApprovingReviewCount = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetRequiredApprovingReviewCount = function () {
        this._requiredApprovingReviewCount = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requiredApprovingReviewCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredApprovingReviewCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requiredReviewThreadResolution", {
        get: function () {
            return this.getBooleanAttribute('required_review_thread_resolution');
        },
        set: function (value) {
            this._requiredReviewThreadResolution = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetRequiredReviewThreadResolution = function () {
        this._requiredReviewThreadResolution = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requiredReviewThreadResolutionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredReviewThreadResolution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requiredReviewers", {
        get: function () {
            return this._requiredReviewers;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesPullRequestOutputReference.prototype.putRequiredReviewers = function (value) {
        this._requiredReviewers.internalValue = value;
    };
    OrganizationRulesetRulesPullRequestOutputReference.prototype.resetRequiredReviewers = function () {
        this._requiredReviewers.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesPullRequestOutputReference.prototype, "requiredReviewersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredReviewers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesPullRequestOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesPullRequestOutputReference = OrganizationRulesetRulesPullRequestOutputReference;
function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        alerts_threshold: cdktf.stringToTerraform(struct.alertsThreshold),
        security_alerts_threshold: cdktf.stringToTerraform(struct.securityAlertsThreshold),
        tool: cdktf.stringToTerraform(struct.tool),
    };
}
function organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        alerts_threshold: {
            value: cdktf.stringToHclTerraform(struct.alertsThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_alerts_threshold: {
            value: cdktf.stringToHclTerraform(struct.securityAlertsThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tool: {
            value: cdktf.stringToHclTerraform(struct.tool),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._alertsThreshold !== undefined) {
                hasAnyValues = true;
                internalValueResult.alertsThreshold = this._alertsThreshold;
            }
            if (this._securityAlertsThreshold !== undefined) {
                hasAnyValues = true;
                internalValueResult.securityAlertsThreshold = this._securityAlertsThreshold;
            }
            if (this._tool !== undefined) {
                hasAnyValues = true;
                internalValueResult.tool = this._tool;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._alertsThreshold = undefined;
                this._securityAlertsThreshold = undefined;
                this._tool = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._alertsThreshold = value.alertsThreshold;
                this._securityAlertsThreshold = value.securityAlertsThreshold;
                this._tool = value.tool;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "alertsThreshold", {
        get: function () {
            return this.getStringAttribute('alerts_threshold');
        },
        set: function (value) {
            this._alertsThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "alertsThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alertsThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "securityAlertsThreshold", {
        get: function () {
            return this.getStringAttribute('security_alerts_threshold');
        },
        set: function (value) {
            this._securityAlertsThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "securityAlertsThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityAlertsThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "tool", {
        get: function () {
            return this.getStringAttribute('tool');
        },
        set: function (value) {
            this._tool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "toolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tool;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference = OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;
var OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.prototype.get = function (index) {
        return new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
}(cdktf.ComplexList));
exports.OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList = OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
function organizationRulesetRulesRequiredCodeScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        required_code_scanning_tool: cdktf.listMapper(organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform, true)(struct.requiredCodeScanningTool),
    };
}
function organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        required_code_scanning_tool: {
            value: cdktf.listMapperHcl(organizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform, true)(struct.requiredCodeScanningTool),
            isBlock: true,
            type: "set",
            storageClassType: "OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesRequiredCodeScanningOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredCodeScanningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesRequiredCodeScanningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_code_scanning_tool - computed: false, optional: false, required: true
        _this._requiredCodeScanningTool = new OrganizationRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(_this, "required_code_scanning_tool", true);
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._requiredCodeScanningTool) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredCodeScanningTool = (_b = this._requiredCodeScanningTool) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._requiredCodeScanningTool.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._requiredCodeScanningTool.internalValue = value.requiredCodeScanningTool;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningOutputReference.prototype, "requiredCodeScanningTool", {
        get: function () {
            return this._requiredCodeScanningTool;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredCodeScanningOutputReference.prototype.putRequiredCodeScanningTool = function (value) {
        this._requiredCodeScanningTool.internalValue = value;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredCodeScanningOutputReference.prototype, "requiredCodeScanningToolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredCodeScanningTool.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesRequiredCodeScanningOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesRequiredCodeScanningOutputReference = OrganizationRulesetRulesRequiredCodeScanningOutputReference;
function organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        context: cdktf.stringToTerraform(struct.context),
        integration_id: cdktf.numberToTerraform(struct.integrationId),
    };
}
function organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        context: {
            value: cdktf.stringToHclTerraform(struct.context),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        integration_id: {
            value: cdktf.numberToHclTerraform(struct.integrationId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._context !== undefined) {
                hasAnyValues = true;
                internalValueResult.context = this._context;
            }
            if (this._integrationId !== undefined) {
                hasAnyValues = true;
                internalValueResult.integrationId = this._integrationId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._context = undefined;
                this._integrationId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._context = value.context;
                this._integrationId = value.integrationId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "context", {
        get: function () {
            return this.getStringAttribute('context');
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "contextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "integrationId", {
        get: function () {
            return this.getNumberAttribute('integration_id');
        },
        set: function (value) {
            this._integrationId = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype.resetIntegrationId = function () {
        this._integrationId = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "integrationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationId;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference = OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;
var OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList.prototype.get = function (index) {
        return new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList;
}(cdktf.ComplexList));
exports.OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList = OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList;
function organizationRulesetRulesRequiredStatusChecksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        do_not_enforce_on_create: cdktf.booleanToTerraform(struct.doNotEnforceOnCreate),
        strict_required_status_checks_policy: cdktf.booleanToTerraform(struct.strictRequiredStatusChecksPolicy),
        required_check: cdktf.listMapper(organizationRulesetRulesRequiredStatusChecksRequiredCheckToTerraform, true)(struct.requiredCheck),
    };
}
function organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        do_not_enforce_on_create: {
            value: cdktf.booleanToHclTerraform(struct.doNotEnforceOnCreate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        strict_required_status_checks_policy: {
            value: cdktf.booleanToHclTerraform(struct.strictRequiredStatusChecksPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_check: {
            value: cdktf.listMapperHcl(organizationRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform, true)(struct.requiredCheck),
            isBlock: true,
            type: "set",
            storageClassType: "OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesRequiredStatusChecksOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredStatusChecksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesRequiredStatusChecksOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_check - computed: false, optional: false, required: true
        _this._requiredCheck = new OrganizationRulesetRulesRequiredStatusChecksRequiredCheckList(_this, "required_check", true);
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._doNotEnforceOnCreate !== undefined) {
                hasAnyValues = true;
                internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
            }
            if (this._strictRequiredStatusChecksPolicy !== undefined) {
                hasAnyValues = true;
                internalValueResult.strictRequiredStatusChecksPolicy = this._strictRequiredStatusChecksPolicy;
            }
            if (((_a = this._requiredCheck) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredCheck = (_b = this._requiredCheck) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._doNotEnforceOnCreate = undefined;
                this._strictRequiredStatusChecksPolicy = undefined;
                this._requiredCheck.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
                this._strictRequiredStatusChecksPolicy = value.strictRequiredStatusChecksPolicy;
                this._requiredCheck.internalValue = value.requiredCheck;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "doNotEnforceOnCreate", {
        get: function () {
            return this.getBooleanAttribute('do_not_enforce_on_create');
        },
        set: function (value) {
            this._doNotEnforceOnCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype.resetDoNotEnforceOnCreate = function () {
        this._doNotEnforceOnCreate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "doNotEnforceOnCreateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._doNotEnforceOnCreate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "strictRequiredStatusChecksPolicy", {
        get: function () {
            return this.getBooleanAttribute('strict_required_status_checks_policy');
        },
        set: function (value) {
            this._strictRequiredStatusChecksPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype.resetStrictRequiredStatusChecksPolicy = function () {
        this._strictRequiredStatusChecksPolicy = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "strictRequiredStatusChecksPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strictRequiredStatusChecksPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "requiredCheck", {
        get: function () {
            return this._requiredCheck;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype.putRequiredCheck = function (value) {
        this._requiredCheck.internalValue = value;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredStatusChecksOutputReference.prototype, "requiredCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredCheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesRequiredStatusChecksOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesRequiredStatusChecksOutputReference = OrganizationRulesetRulesRequiredStatusChecksOutputReference;
function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        path: cdktf.stringToTerraform(struct.path),
        ref: cdktf.stringToTerraform(struct.ref),
        repository_id: cdktf.numberToTerraform(struct.repositoryId),
    };
}
function organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ref: {
            value: cdktf.stringToHclTerraform(struct.ref),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository_id: {
            value: cdktf.numberToHclTerraform(struct.repositoryId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            if (this._ref !== undefined) {
                hasAnyValues = true;
                internalValueResult.ref = this._ref;
            }
            if (this._repositoryId !== undefined) {
                hasAnyValues = true;
                internalValueResult.repositoryId = this._repositoryId;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._path = undefined;
                this._ref = undefined;
                this._repositoryId = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._path = value.path;
                this._ref = value.ref;
                this._repositoryId = value.repositoryId;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "ref", {
        get: function () {
            return this.getStringAttribute('ref');
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype.resetRef = function () {
        this._ref = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "refInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ref;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "repositoryId", {
        get: function () {
            return this.getNumberAttribute('repository_id');
        },
        set: function (value) {
            this._repositoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference.prototype, "repositoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repositoryId;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference = OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference;
var OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList.prototype.get = function (index) {
        return new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList;
}(cdktf.ComplexList));
exports.OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList = OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList;
function organizationRulesetRulesRequiredWorkflowsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        do_not_enforce_on_create: cdktf.booleanToTerraform(struct.doNotEnforceOnCreate),
        required_workflow: cdktf.listMapper(organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToTerraform, true)(struct.requiredWorkflow),
    };
}
function organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        do_not_enforce_on_create: {
            value: cdktf.booleanToHclTerraform(struct.doNotEnforceOnCreate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_workflow: {
            value: cdktf.listMapperHcl(organizationRulesetRulesRequiredWorkflowsRequiredWorkflowToHclTerraform, true)(struct.requiredWorkflow),
            isBlock: true,
            type: "set",
            storageClassType: "OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesRequiredWorkflowsOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesRequiredWorkflowsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesRequiredWorkflowsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_workflow - computed: false, optional: false, required: true
        _this._requiredWorkflow = new OrganizationRulesetRulesRequiredWorkflowsRequiredWorkflowList(_this, "required_workflow", true);
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._doNotEnforceOnCreate !== undefined) {
                hasAnyValues = true;
                internalValueResult.doNotEnforceOnCreate = this._doNotEnforceOnCreate;
            }
            if (((_a = this._requiredWorkflow) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredWorkflow = (_b = this._requiredWorkflow) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._doNotEnforceOnCreate = undefined;
                this._requiredWorkflow.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._doNotEnforceOnCreate = value.doNotEnforceOnCreate;
                this._requiredWorkflow.internalValue = value.requiredWorkflow;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype, "doNotEnforceOnCreate", {
        get: function () {
            return this.getBooleanAttribute('do_not_enforce_on_create');
        },
        set: function (value) {
            this._doNotEnforceOnCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype.resetDoNotEnforceOnCreate = function () {
        this._doNotEnforceOnCreate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype, "doNotEnforceOnCreateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._doNotEnforceOnCreate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype, "requiredWorkflow", {
        get: function () {
            return this._requiredWorkflow;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype.putRequiredWorkflow = function (value) {
        this._requiredWorkflow.internalValue = value;
    };
    Object.defineProperty(OrganizationRulesetRulesRequiredWorkflowsOutputReference.prototype, "requiredWorkflowInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredWorkflow.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesRequiredWorkflowsOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesRequiredWorkflowsOutputReference = OrganizationRulesetRulesRequiredWorkflowsOutputReference;
function organizationRulesetRulesTagNamePatternToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        negate: cdktf.booleanToTerraform(struct.negate),
        operator: cdktf.stringToTerraform(struct.operator),
        pattern: cdktf.stringToTerraform(struct.pattern),
    };
}
function organizationRulesetRulesTagNamePatternToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        name: {
            value: cdktf.stringToHclTerraform(struct.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        negate: {
            value: cdktf.booleanToHclTerraform(struct.negate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        operator: {
            value: cdktf.stringToHclTerraform(struct.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern: {
            value: cdktf.stringToHclTerraform(struct.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesTagNamePatternOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesTagNamePatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesTagNamePatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._name !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = this._name;
            }
            if (this._negate !== undefined) {
                hasAnyValues = true;
                internalValueResult.negate = this._negate;
            }
            if (this._operator !== undefined) {
                hasAnyValues = true;
                internalValueResult.operator = this._operator;
            }
            if (this._pattern !== undefined) {
                hasAnyValues = true;
                internalValueResult.pattern = this._pattern;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._name = undefined;
                this._negate = undefined;
                this._operator = undefined;
                this._pattern = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._name = value.name;
                this._negate = value.negate;
                this._operator = value.operator;
                this._pattern = value.pattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesTagNamePatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesTagNamePatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesTagNamePatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesTagNamePatternOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesTagNamePatternOutputReference = OrganizationRulesetRulesTagNamePatternOutputReference;
function organizationRulesetRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        creation: cdktf.booleanToTerraform(struct.creation),
        deletion: cdktf.booleanToTerraform(struct.deletion),
        non_fast_forward: cdktf.booleanToTerraform(struct.nonFastForward),
        required_linear_history: cdktf.booleanToTerraform(struct.requiredLinearHistory),
        required_signatures: cdktf.booleanToTerraform(struct.requiredSignatures),
        update: cdktf.booleanToTerraform(struct.update),
        branch_name_pattern: organizationRulesetRulesBranchNamePatternToTerraform(struct.branchNamePattern),
        commit_author_email_pattern: organizationRulesetRulesCommitAuthorEmailPatternToTerraform(struct.commitAuthorEmailPattern),
        commit_message_pattern: organizationRulesetRulesCommitMessagePatternToTerraform(struct.commitMessagePattern),
        committer_email_pattern: organizationRulesetRulesCommitterEmailPatternToTerraform(struct.committerEmailPattern),
        copilot_code_review: organizationRulesetRulesCopilotCodeReviewToTerraform(struct.copilotCodeReview),
        file_extension_restriction: organizationRulesetRulesFileExtensionRestrictionToTerraform(struct.fileExtensionRestriction),
        file_path_restriction: organizationRulesetRulesFilePathRestrictionToTerraform(struct.filePathRestriction),
        max_file_path_length: organizationRulesetRulesMaxFilePathLengthToTerraform(struct.maxFilePathLength),
        max_file_size: organizationRulesetRulesMaxFileSizeToTerraform(struct.maxFileSize),
        pull_request: organizationRulesetRulesPullRequestToTerraform(struct.pullRequest),
        required_code_scanning: organizationRulesetRulesRequiredCodeScanningToTerraform(struct.requiredCodeScanning),
        required_status_checks: organizationRulesetRulesRequiredStatusChecksToTerraform(struct.requiredStatusChecks),
        required_workflows: organizationRulesetRulesRequiredWorkflowsToTerraform(struct.requiredWorkflows),
        tag_name_pattern: organizationRulesetRulesTagNamePatternToTerraform(struct.tagNamePattern),
    };
}
function organizationRulesetRulesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        creation: {
            value: cdktf.booleanToHclTerraform(struct.creation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        deletion: {
            value: cdktf.booleanToHclTerraform(struct.deletion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        non_fast_forward: {
            value: cdktf.booleanToHclTerraform(struct.nonFastForward),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_linear_history: {
            value: cdktf.booleanToHclTerraform(struct.requiredLinearHistory),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        required_signatures: {
            value: cdktf.booleanToHclTerraform(struct.requiredSignatures),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        update: {
            value: cdktf.booleanToHclTerraform(struct.update),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        branch_name_pattern: {
            value: organizationRulesetRulesBranchNamePatternToHclTerraform(struct.branchNamePattern),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesBranchNamePatternList",
        },
        commit_author_email_pattern: {
            value: organizationRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct.commitAuthorEmailPattern),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesCommitAuthorEmailPatternList",
        },
        commit_message_pattern: {
            value: organizationRulesetRulesCommitMessagePatternToHclTerraform(struct.commitMessagePattern),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesCommitMessagePatternList",
        },
        committer_email_pattern: {
            value: organizationRulesetRulesCommitterEmailPatternToHclTerraform(struct.committerEmailPattern),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesCommitterEmailPatternList",
        },
        copilot_code_review: {
            value: organizationRulesetRulesCopilotCodeReviewToHclTerraform(struct.copilotCodeReview),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesCopilotCodeReviewList",
        },
        file_extension_restriction: {
            value: organizationRulesetRulesFileExtensionRestrictionToHclTerraform(struct.fileExtensionRestriction),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesFileExtensionRestrictionList",
        },
        file_path_restriction: {
            value: organizationRulesetRulesFilePathRestrictionToHclTerraform(struct.filePathRestriction),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesFilePathRestrictionList",
        },
        max_file_path_length: {
            value: organizationRulesetRulesMaxFilePathLengthToHclTerraform(struct.maxFilePathLength),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesMaxFilePathLengthList",
        },
        max_file_size: {
            value: organizationRulesetRulesMaxFileSizeToHclTerraform(struct.maxFileSize),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesMaxFileSizeList",
        },
        pull_request: {
            value: organizationRulesetRulesPullRequestToHclTerraform(struct.pullRequest),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesPullRequestList",
        },
        required_code_scanning: {
            value: organizationRulesetRulesRequiredCodeScanningToHclTerraform(struct.requiredCodeScanning),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesRequiredCodeScanningList",
        },
        required_status_checks: {
            value: organizationRulesetRulesRequiredStatusChecksToHclTerraform(struct.requiredStatusChecks),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesRequiredStatusChecksList",
        },
        required_workflows: {
            value: organizationRulesetRulesRequiredWorkflowsToHclTerraform(struct.requiredWorkflows),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesRequiredWorkflowsList",
        },
        tag_name_pattern: {
            value: organizationRulesetRulesTagNamePatternToHclTerraform(struct.tagNamePattern),
            isBlock: true,
            type: "list",
            storageClassType: "OrganizationRulesetRulesTagNamePatternList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var OrganizationRulesetRulesOutputReference = /** @class */ (function (_super) {
    __extends(OrganizationRulesetRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function OrganizationRulesetRulesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // branch_name_pattern - computed: false, optional: true, required: false
        _this._branchNamePattern = new OrganizationRulesetRulesBranchNamePatternOutputReference(_this, "branch_name_pattern");
        // commit_author_email_pattern - computed: false, optional: true, required: false
        _this._commitAuthorEmailPattern = new OrganizationRulesetRulesCommitAuthorEmailPatternOutputReference(_this, "commit_author_email_pattern");
        // commit_message_pattern - computed: false, optional: true, required: false
        _this._commitMessagePattern = new OrganizationRulesetRulesCommitMessagePatternOutputReference(_this, "commit_message_pattern");
        // committer_email_pattern - computed: false, optional: true, required: false
        _this._committerEmailPattern = new OrganizationRulesetRulesCommitterEmailPatternOutputReference(_this, "committer_email_pattern");
        // copilot_code_review - computed: false, optional: true, required: false
        _this._copilotCodeReview = new OrganizationRulesetRulesCopilotCodeReviewOutputReference(_this, "copilot_code_review");
        // file_extension_restriction - computed: false, optional: true, required: false
        _this._fileExtensionRestriction = new OrganizationRulesetRulesFileExtensionRestrictionOutputReference(_this, "file_extension_restriction");
        // file_path_restriction - computed: false, optional: true, required: false
        _this._filePathRestriction = new OrganizationRulesetRulesFilePathRestrictionOutputReference(_this, "file_path_restriction");
        // max_file_path_length - computed: false, optional: true, required: false
        _this._maxFilePathLength = new OrganizationRulesetRulesMaxFilePathLengthOutputReference(_this, "max_file_path_length");
        // max_file_size - computed: false, optional: true, required: false
        _this._maxFileSize = new OrganizationRulesetRulesMaxFileSizeOutputReference(_this, "max_file_size");
        // pull_request - computed: false, optional: true, required: false
        _this._pullRequest = new OrganizationRulesetRulesPullRequestOutputReference(_this, "pull_request");
        // required_code_scanning - computed: false, optional: true, required: false
        _this._requiredCodeScanning = new OrganizationRulesetRulesRequiredCodeScanningOutputReference(_this, "required_code_scanning");
        // required_status_checks - computed: false, optional: true, required: false
        _this._requiredStatusChecks = new OrganizationRulesetRulesRequiredStatusChecksOutputReference(_this, "required_status_checks");
        // required_workflows - computed: false, optional: true, required: false
        _this._requiredWorkflows = new OrganizationRulesetRulesRequiredWorkflowsOutputReference(_this, "required_workflows");
        // tag_name_pattern - computed: false, optional: true, required: false
        _this._tagNamePattern = new OrganizationRulesetRulesTagNamePatternOutputReference(_this, "tag_name_pattern");
        return _this;
    }
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._creation !== undefined) {
                hasAnyValues = true;
                internalValueResult.creation = this._creation;
            }
            if (this._deletion !== undefined) {
                hasAnyValues = true;
                internalValueResult.deletion = this._deletion;
            }
            if (this._nonFastForward !== undefined) {
                hasAnyValues = true;
                internalValueResult.nonFastForward = this._nonFastForward;
            }
            if (this._requiredLinearHistory !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredLinearHistory = this._requiredLinearHistory;
            }
            if (this._requiredSignatures !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredSignatures = this._requiredSignatures;
            }
            if (this._update !== undefined) {
                hasAnyValues = true;
                internalValueResult.update = this._update;
            }
            if (((_a = this._branchNamePattern) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.branchNamePattern = (_b = this._branchNamePattern) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._commitAuthorEmailPattern) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.commitAuthorEmailPattern = (_d = this._commitAuthorEmailPattern) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._commitMessagePattern) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.commitMessagePattern = (_f = this._commitMessagePattern) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._committerEmailPattern) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.committerEmailPattern = (_h = this._committerEmailPattern) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._copilotCodeReview) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.copilotCodeReview = (_k = this._copilotCodeReview) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._fileExtensionRestriction) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.fileExtensionRestriction = (_m = this._fileExtensionRestriction) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            if (((_o = this._filePathRestriction) === null || _o === void 0 ? void 0 : _o.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.filePathRestriction = (_p = this._filePathRestriction) === null || _p === void 0 ? void 0 : _p.internalValue;
            }
            if (((_q = this._maxFilePathLength) === null || _q === void 0 ? void 0 : _q.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxFilePathLength = (_r = this._maxFilePathLength) === null || _r === void 0 ? void 0 : _r.internalValue;
            }
            if (((_s = this._maxFileSize) === null || _s === void 0 ? void 0 : _s.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxFileSize = (_t = this._maxFileSize) === null || _t === void 0 ? void 0 : _t.internalValue;
            }
            if (((_u = this._pullRequest) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.pullRequest = (_v = this._pullRequest) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._requiredCodeScanning) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredCodeScanning = (_x = this._requiredCodeScanning) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._requiredStatusChecks) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredStatusChecks = (_z = this._requiredStatusChecks) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._requiredWorkflows) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredWorkflows = (_1 = this._requiredWorkflows) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._tagNamePattern) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tagNamePattern = (_3 = this._tagNamePattern) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._creation = undefined;
                this._deletion = undefined;
                this._nonFastForward = undefined;
                this._requiredLinearHistory = undefined;
                this._requiredSignatures = undefined;
                this._update = undefined;
                this._branchNamePattern.internalValue = undefined;
                this._commitAuthorEmailPattern.internalValue = undefined;
                this._commitMessagePattern.internalValue = undefined;
                this._committerEmailPattern.internalValue = undefined;
                this._copilotCodeReview.internalValue = undefined;
                this._fileExtensionRestriction.internalValue = undefined;
                this._filePathRestriction.internalValue = undefined;
                this._maxFilePathLength.internalValue = undefined;
                this._maxFileSize.internalValue = undefined;
                this._pullRequest.internalValue = undefined;
                this._requiredCodeScanning.internalValue = undefined;
                this._requiredStatusChecks.internalValue = undefined;
                this._requiredWorkflows.internalValue = undefined;
                this._tagNamePattern.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._creation = value.creation;
                this._deletion = value.deletion;
                this._nonFastForward = value.nonFastForward;
                this._requiredLinearHistory = value.requiredLinearHistory;
                this._requiredSignatures = value.requiredSignatures;
                this._update = value.update;
                this._branchNamePattern.internalValue = value.branchNamePattern;
                this._commitAuthorEmailPattern.internalValue = value.commitAuthorEmailPattern;
                this._commitMessagePattern.internalValue = value.commitMessagePattern;
                this._committerEmailPattern.internalValue = value.committerEmailPattern;
                this._copilotCodeReview.internalValue = value.copilotCodeReview;
                this._fileExtensionRestriction.internalValue = value.fileExtensionRestriction;
                this._filePathRestriction.internalValue = value.filePathRestriction;
                this._maxFilePathLength.internalValue = value.maxFilePathLength;
                this._maxFileSize.internalValue = value.maxFileSize;
                this._pullRequest.internalValue = value.pullRequest;
                this._requiredCodeScanning.internalValue = value.requiredCodeScanning;
                this._requiredStatusChecks.internalValue = value.requiredStatusChecks;
                this._requiredWorkflows.internalValue = value.requiredWorkflows;
                this._tagNamePattern.internalValue = value.tagNamePattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "creation", {
        get: function () {
            return this.getBooleanAttribute('creation');
        },
        set: function (value) {
            this._creation = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.resetCreation = function () {
        this._creation = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "creationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "deletion", {
        get: function () {
            return this.getBooleanAttribute('deletion');
        },
        set: function (value) {
            this._deletion = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.resetDeletion = function () {
        this._deletion = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "deletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "nonFastForward", {
        get: function () {
            return this.getBooleanAttribute('non_fast_forward');
        },
        set: function (value) {
            this._nonFastForward = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.resetNonFastForward = function () {
        this._nonFastForward = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "nonFastForwardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nonFastForward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredLinearHistory", {
        get: function () {
            return this.getBooleanAttribute('required_linear_history');
        },
        set: function (value) {
            this._requiredLinearHistory = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.resetRequiredLinearHistory = function () {
        this._requiredLinearHistory = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredLinearHistoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredLinearHistory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredSignatures", {
        get: function () {
            return this.getBooleanAttribute('required_signatures');
        },
        set: function (value) {
            this._requiredSignatures = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.resetRequiredSignatures = function () {
        this._requiredSignatures = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredSignaturesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredSignatures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "update", {
        get: function () {
            return this.getBooleanAttribute('update');
        },
        set: function (value) {
            this._update = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.resetUpdate = function () {
        this._update = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "updateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._update;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "branchNamePattern", {
        get: function () {
            return this._branchNamePattern;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putBranchNamePattern = function (value) {
        this._branchNamePattern.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetBranchNamePattern = function () {
        this._branchNamePattern.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "branchNamePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branchNamePattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "commitAuthorEmailPattern", {
        get: function () {
            return this._commitAuthorEmailPattern;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putCommitAuthorEmailPattern = function (value) {
        this._commitAuthorEmailPattern.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetCommitAuthorEmailPattern = function () {
        this._commitAuthorEmailPattern.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "commitAuthorEmailPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitAuthorEmailPattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "commitMessagePattern", {
        get: function () {
            return this._commitMessagePattern;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putCommitMessagePattern = function (value) {
        this._commitMessagePattern.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetCommitMessagePattern = function () {
        this._commitMessagePattern.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "commitMessagePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitMessagePattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "committerEmailPattern", {
        get: function () {
            return this._committerEmailPattern;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putCommitterEmailPattern = function (value) {
        this._committerEmailPattern.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetCommitterEmailPattern = function () {
        this._committerEmailPattern.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "committerEmailPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._committerEmailPattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "copilotCodeReview", {
        get: function () {
            return this._copilotCodeReview;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putCopilotCodeReview = function (value) {
        this._copilotCodeReview.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetCopilotCodeReview = function () {
        this._copilotCodeReview.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "copilotCodeReviewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copilotCodeReview.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "fileExtensionRestriction", {
        get: function () {
            return this._fileExtensionRestriction;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putFileExtensionRestriction = function (value) {
        this._fileExtensionRestriction.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetFileExtensionRestriction = function () {
        this._fileExtensionRestriction.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "fileExtensionRestrictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileExtensionRestriction.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "filePathRestriction", {
        get: function () {
            return this._filePathRestriction;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putFilePathRestriction = function (value) {
        this._filePathRestriction.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetFilePathRestriction = function () {
        this._filePathRestriction.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "filePathRestrictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filePathRestriction.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "maxFilePathLength", {
        get: function () {
            return this._maxFilePathLength;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putMaxFilePathLength = function (value) {
        this._maxFilePathLength.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetMaxFilePathLength = function () {
        this._maxFilePathLength.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "maxFilePathLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFilePathLength.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "maxFileSize", {
        get: function () {
            return this._maxFileSize;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putMaxFileSize = function (value) {
        this._maxFileSize.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetMaxFileSize = function () {
        this._maxFileSize.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "maxFileSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFileSize.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "pullRequest", {
        get: function () {
            return this._pullRequest;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putPullRequest = function (value) {
        this._pullRequest.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetPullRequest = function () {
        this._pullRequest.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "pullRequestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pullRequest.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredCodeScanning", {
        get: function () {
            return this._requiredCodeScanning;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putRequiredCodeScanning = function (value) {
        this._requiredCodeScanning.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetRequiredCodeScanning = function () {
        this._requiredCodeScanning.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredCodeScanningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredCodeScanning.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredStatusChecks", {
        get: function () {
            return this._requiredStatusChecks;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putRequiredStatusChecks = function (value) {
        this._requiredStatusChecks.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetRequiredStatusChecks = function () {
        this._requiredStatusChecks.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredStatusChecksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredStatusChecks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredWorkflows", {
        get: function () {
            return this._requiredWorkflows;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putRequiredWorkflows = function (value) {
        this._requiredWorkflows.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetRequiredWorkflows = function () {
        this._requiredWorkflows.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "requiredWorkflowsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredWorkflows.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "tagNamePattern", {
        get: function () {
            return this._tagNamePattern;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRulesetRulesOutputReference.prototype.putTagNamePattern = function (value) {
        this._tagNamePattern.internalValue = value;
    };
    OrganizationRulesetRulesOutputReference.prototype.resetTagNamePattern = function () {
        this._tagNamePattern.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRulesetRulesOutputReference.prototype, "tagNamePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagNamePattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return OrganizationRulesetRulesOutputReference;
}(cdktf.ComplexObject));
exports.OrganizationRulesetRulesOutputReference = OrganizationRulesetRulesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset github_organization_ruleset}
*/
var OrganizationRuleset = /** @class */ (function (_super) {
    __extends(OrganizationRuleset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset github_organization_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationRulesetConfig
    */
    function OrganizationRuleset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_organization_ruleset',
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
        // bypass_actors - computed: false, optional: true, required: false
        _this._bypassActors = new OrganizationRulesetBypassActorsList(_this, "bypass_actors", false);
        // conditions - computed: false, optional: true, required: false
        _this._conditions = new OrganizationRulesetConditionsOutputReference(_this, "conditions");
        // rules - computed: false, optional: false, required: true
        _this._rules = new OrganizationRulesetRulesOutputReference(_this, "rules");
        _this._enforcement = config.enforcement;
        _this._id = config.id;
        _this._name = config.name;
        _this._target = config.target;
        _this._bypassActors.internalValue = config.bypassActors;
        _this._conditions.internalValue = config.conditions;
        _this._rules.internalValue = config.rules;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a OrganizationRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationRuleset to import
    * @param importFromId The id of the existing OrganizationRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/organization_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationRuleset to import is found
    */
    OrganizationRuleset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_organization_ruleset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(OrganizationRuleset.prototype, "enforcement", {
        get: function () {
            return this.getStringAttribute('enforcement');
        },
        set: function (value) {
            this._enforcement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "enforcementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforcement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRuleset.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(OrganizationRuleset.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "rulesetId", {
        // ruleset_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ruleset_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "bypassActors", {
        get: function () {
            return this._bypassActors;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRuleset.prototype.putBypassActors = function (value) {
        this._bypassActors.internalValue = value;
    };
    OrganizationRuleset.prototype.resetBypassActors = function () {
        this._bypassActors.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRuleset.prototype, "bypassActorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassActors.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRuleset.prototype.putConditions = function (value) {
        this._conditions.internalValue = value;
    };
    OrganizationRuleset.prototype.resetConditions = function () {
        this._conditions.internalValue = undefined;
    };
    Object.defineProperty(OrganizationRuleset.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrganizationRuleset.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    OrganizationRuleset.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    Object.defineProperty(OrganizationRuleset.prototype, "rulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rules.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    OrganizationRuleset.prototype.synthesizeAttributes = function () {
        return {
            enforcement: cdktf.stringToTerraform(this._enforcement),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            target: cdktf.stringToTerraform(this._target),
            bypass_actors: cdktf.listMapper(organizationRulesetBypassActorsToTerraform, true)(this._bypassActors.internalValue),
            conditions: organizationRulesetConditionsToTerraform(this._conditions.internalValue),
            rules: organizationRulesetRulesToTerraform(this._rules.internalValue),
        };
    };
    OrganizationRuleset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            enforcement: {
                value: cdktf.stringToHclTerraform(this._enforcement),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            id: {
                value: cdktf.stringToHclTerraform(this._id),
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
            target: {
                value: cdktf.stringToHclTerraform(this._target),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bypass_actors: {
                value: cdktf.listMapperHcl(organizationRulesetBypassActorsToHclTerraform, true)(this._bypassActors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "OrganizationRulesetBypassActorsList",
            },
            conditions: {
                value: organizationRulesetConditionsToHclTerraform(this._conditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "OrganizationRulesetConditionsList",
            },
            rules: {
                value: organizationRulesetRulesToHclTerraform(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "OrganizationRulesetRulesList",
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
    OrganizationRuleset.tfResourceType = "github_organization_ruleset";
    return OrganizationRuleset;
}(cdktf.TerraformResource));
exports.OrganizationRuleset = OrganizationRuleset;
