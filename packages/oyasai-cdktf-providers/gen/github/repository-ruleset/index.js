"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset
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
exports.RepositoryRuleset = exports.RepositoryRulesetRulesOutputReference = exports.RepositoryRulesetRulesTagNamePatternOutputReference = exports.RepositoryRulesetRulesRequiredStatusChecksOutputReference = exports.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList = exports.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference = exports.RepositoryRulesetRulesRequiredDeploymentsOutputReference = exports.RepositoryRulesetRulesRequiredCodeScanningOutputReference = exports.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList = exports.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference = exports.RepositoryRulesetRulesPullRequestOutputReference = exports.RepositoryRulesetRulesPullRequestRequiredReviewersList = exports.RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference = exports.RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference = exports.RepositoryRulesetRulesMergeQueueOutputReference = exports.RepositoryRulesetRulesMaxFileSizeOutputReference = exports.RepositoryRulesetRulesMaxFilePathLengthOutputReference = exports.RepositoryRulesetRulesFilePathRestrictionOutputReference = exports.RepositoryRulesetRulesFileExtensionRestrictionOutputReference = exports.RepositoryRulesetRulesCopilotCodeReviewOutputReference = exports.RepositoryRulesetRulesCommitterEmailPatternOutputReference = exports.RepositoryRulesetRulesCommitMessagePatternOutputReference = exports.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference = exports.RepositoryRulesetRulesBranchNamePatternOutputReference = exports.RepositoryRulesetConditionsOutputReference = exports.RepositoryRulesetConditionsRefNameOutputReference = exports.RepositoryRulesetBypassActorsList = exports.RepositoryRulesetBypassActorsOutputReference = void 0;
exports.repositoryRulesetBypassActorsToTerraform = repositoryRulesetBypassActorsToTerraform;
exports.repositoryRulesetBypassActorsToHclTerraform = repositoryRulesetBypassActorsToHclTerraform;
exports.repositoryRulesetConditionsRefNameToTerraform = repositoryRulesetConditionsRefNameToTerraform;
exports.repositoryRulesetConditionsRefNameToHclTerraform = repositoryRulesetConditionsRefNameToHclTerraform;
exports.repositoryRulesetConditionsToTerraform = repositoryRulesetConditionsToTerraform;
exports.repositoryRulesetConditionsToHclTerraform = repositoryRulesetConditionsToHclTerraform;
exports.repositoryRulesetRulesBranchNamePatternToTerraform = repositoryRulesetRulesBranchNamePatternToTerraform;
exports.repositoryRulesetRulesBranchNamePatternToHclTerraform = repositoryRulesetRulesBranchNamePatternToHclTerraform;
exports.repositoryRulesetRulesCommitAuthorEmailPatternToTerraform = repositoryRulesetRulesCommitAuthorEmailPatternToTerraform;
exports.repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform = repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform;
exports.repositoryRulesetRulesCommitMessagePatternToTerraform = repositoryRulesetRulesCommitMessagePatternToTerraform;
exports.repositoryRulesetRulesCommitMessagePatternToHclTerraform = repositoryRulesetRulesCommitMessagePatternToHclTerraform;
exports.repositoryRulesetRulesCommitterEmailPatternToTerraform = repositoryRulesetRulesCommitterEmailPatternToTerraform;
exports.repositoryRulesetRulesCommitterEmailPatternToHclTerraform = repositoryRulesetRulesCommitterEmailPatternToHclTerraform;
exports.repositoryRulesetRulesCopilotCodeReviewToTerraform = repositoryRulesetRulesCopilotCodeReviewToTerraform;
exports.repositoryRulesetRulesCopilotCodeReviewToHclTerraform = repositoryRulesetRulesCopilotCodeReviewToHclTerraform;
exports.repositoryRulesetRulesFileExtensionRestrictionToTerraform = repositoryRulesetRulesFileExtensionRestrictionToTerraform;
exports.repositoryRulesetRulesFileExtensionRestrictionToHclTerraform = repositoryRulesetRulesFileExtensionRestrictionToHclTerraform;
exports.repositoryRulesetRulesFilePathRestrictionToTerraform = repositoryRulesetRulesFilePathRestrictionToTerraform;
exports.repositoryRulesetRulesFilePathRestrictionToHclTerraform = repositoryRulesetRulesFilePathRestrictionToHclTerraform;
exports.repositoryRulesetRulesMaxFilePathLengthToTerraform = repositoryRulesetRulesMaxFilePathLengthToTerraform;
exports.repositoryRulesetRulesMaxFilePathLengthToHclTerraform = repositoryRulesetRulesMaxFilePathLengthToHclTerraform;
exports.repositoryRulesetRulesMaxFileSizeToTerraform = repositoryRulesetRulesMaxFileSizeToTerraform;
exports.repositoryRulesetRulesMaxFileSizeToHclTerraform = repositoryRulesetRulesMaxFileSizeToHclTerraform;
exports.repositoryRulesetRulesMergeQueueToTerraform = repositoryRulesetRulesMergeQueueToTerraform;
exports.repositoryRulesetRulesMergeQueueToHclTerraform = repositoryRulesetRulesMergeQueueToHclTerraform;
exports.repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform = repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform;
exports.repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform = repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform;
exports.repositoryRulesetRulesPullRequestRequiredReviewersToTerraform = repositoryRulesetRulesPullRequestRequiredReviewersToTerraform;
exports.repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform = repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform;
exports.repositoryRulesetRulesPullRequestToTerraform = repositoryRulesetRulesPullRequestToTerraform;
exports.repositoryRulesetRulesPullRequestToHclTerraform = repositoryRulesetRulesPullRequestToHclTerraform;
exports.repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform = repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform;
exports.repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform = repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform;
exports.repositoryRulesetRulesRequiredCodeScanningToTerraform = repositoryRulesetRulesRequiredCodeScanningToTerraform;
exports.repositoryRulesetRulesRequiredCodeScanningToHclTerraform = repositoryRulesetRulesRequiredCodeScanningToHclTerraform;
exports.repositoryRulesetRulesRequiredDeploymentsToTerraform = repositoryRulesetRulesRequiredDeploymentsToTerraform;
exports.repositoryRulesetRulesRequiredDeploymentsToHclTerraform = repositoryRulesetRulesRequiredDeploymentsToHclTerraform;
exports.repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform = repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform;
exports.repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform = repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform;
exports.repositoryRulesetRulesRequiredStatusChecksToTerraform = repositoryRulesetRulesRequiredStatusChecksToTerraform;
exports.repositoryRulesetRulesRequiredStatusChecksToHclTerraform = repositoryRulesetRulesRequiredStatusChecksToHclTerraform;
exports.repositoryRulesetRulesTagNamePatternToTerraform = repositoryRulesetRulesTagNamePatternToTerraform;
exports.repositoryRulesetRulesTagNamePatternToHclTerraform = repositoryRulesetRulesTagNamePatternToHclTerraform;
exports.repositoryRulesetRulesToTerraform = repositoryRulesetRulesToTerraform;
exports.repositoryRulesetRulesToHclTerraform = repositoryRulesetRulesToHclTerraform;
var cdktf = require("cdktf");
function repositoryRulesetBypassActorsToTerraform(struct) {
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
function repositoryRulesetBypassActorsToHclTerraform(struct) {
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
var RepositoryRulesetBypassActorsOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetBypassActorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetBypassActorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "actorId", {
        get: function () {
            return this.getNumberAttribute('actor_id');
        },
        set: function (value) {
            this._actorId = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetBypassActorsOutputReference.prototype.resetActorId = function () {
        this._actorId = undefined;
    };
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "actorIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "actorType", {
        get: function () {
            return this.getStringAttribute('actor_type');
        },
        set: function (value) {
            this._actorType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "actorTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._actorType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "bypassMode", {
        get: function () {
            return this.getStringAttribute('bypass_mode');
        },
        set: function (value) {
            this._bypassMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetBypassActorsOutputReference.prototype, "bypassModeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassMode;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetBypassActorsOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetBypassActorsOutputReference = RepositoryRulesetBypassActorsOutputReference;
var RepositoryRulesetBypassActorsList = /** @class */ (function (_super) {
    __extends(RepositoryRulesetBypassActorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetBypassActorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryRulesetBypassActorsList.prototype.get = function (index) {
        return new RepositoryRulesetBypassActorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryRulesetBypassActorsList;
}(cdktf.ComplexList));
exports.RepositoryRulesetBypassActorsList = RepositoryRulesetBypassActorsList;
function repositoryRulesetConditionsRefNameToTerraform(struct) {
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
function repositoryRulesetConditionsRefNameToHclTerraform(struct) {
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
var RepositoryRulesetConditionsRefNameOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetConditionsRefNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetConditionsRefNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetConditionsRefNameOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetConditionsRefNameOutputReference.prototype, "exclude", {
        get: function () {
            return this.getListAttribute('exclude');
        },
        set: function (value) {
            this._exclude = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetConditionsRefNameOutputReference.prototype, "excludeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exclude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetConditionsRefNameOutputReference.prototype, "include", {
        get: function () {
            return this.getListAttribute('include');
        },
        set: function (value) {
            this._include = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetConditionsRefNameOutputReference.prototype, "includeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._include;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetConditionsRefNameOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetConditionsRefNameOutputReference = RepositoryRulesetConditionsRefNameOutputReference;
function repositoryRulesetConditionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        ref_name: repositoryRulesetConditionsRefNameToTerraform(struct.refName),
    };
}
function repositoryRulesetConditionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        ref_name: {
            value: repositoryRulesetConditionsRefNameToHclTerraform(struct.refName),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetConditionsRefNameList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryRulesetConditionsOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetConditionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetConditionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // ref_name - computed: false, optional: false, required: true
        _this._refName = new RepositoryRulesetConditionsRefNameOutputReference(_this, "ref_name");
        return _this;
    }
    Object.defineProperty(RepositoryRulesetConditionsOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._refName) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.refName = (_b = this._refName) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._refName.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._refName.internalValue = value.refName;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetConditionsOutputReference.prototype, "refName", {
        get: function () {
            return this._refName;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetConditionsOutputReference.prototype.putRefName = function (value) {
        this._refName.internalValue = value;
    };
    Object.defineProperty(RepositoryRulesetConditionsOutputReference.prototype, "refNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._refName.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetConditionsOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetConditionsOutputReference = RepositoryRulesetConditionsOutputReference;
function repositoryRulesetRulesBranchNamePatternToTerraform(struct) {
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
function repositoryRulesetRulesBranchNamePatternToHclTerraform(struct) {
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
var RepositoryRulesetRulesBranchNamePatternOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesBranchNamePatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesBranchNamePatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesBranchNamePatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesBranchNamePatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesBranchNamePatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesBranchNamePatternOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesBranchNamePatternOutputReference = RepositoryRulesetRulesBranchNamePatternOutputReference;
function repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct) {
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
function repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct) {
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
var RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference = RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference;
function repositoryRulesetRulesCommitMessagePatternToTerraform(struct) {
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
function repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct) {
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
var RepositoryRulesetRulesCommitMessagePatternOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesCommitMessagePatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesCommitMessagePatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitMessagePatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesCommitMessagePatternOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesCommitMessagePatternOutputReference = RepositoryRulesetRulesCommitMessagePatternOutputReference;
function repositoryRulesetRulesCommitterEmailPatternToTerraform(struct) {
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
function repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct) {
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
var RepositoryRulesetRulesCommitterEmailPatternOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesCommitterEmailPatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesCommitterEmailPatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCommitterEmailPatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesCommitterEmailPatternOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesCommitterEmailPatternOutputReference = RepositoryRulesetRulesCommitterEmailPatternOutputReference;
function repositoryRulesetRulesCopilotCodeReviewToTerraform(struct) {
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
function repositoryRulesetRulesCopilotCodeReviewToHclTerraform(struct) {
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
var RepositoryRulesetRulesCopilotCodeReviewOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesCopilotCodeReviewOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesCopilotCodeReviewOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewDraftPullRequests", {
        get: function () {
            return this.getBooleanAttribute('review_draft_pull_requests');
        },
        set: function (value) {
            this._reviewDraftPullRequests = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype.resetReviewDraftPullRequests = function () {
        this._reviewDraftPullRequests = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewDraftPullRequestsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewDraftPullRequests;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewOnPush", {
        get: function () {
            return this.getBooleanAttribute('review_on_push');
        },
        set: function (value) {
            this._reviewOnPush = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype.resetReviewOnPush = function () {
        this._reviewOnPush = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesCopilotCodeReviewOutputReference.prototype, "reviewOnPushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewOnPush;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesCopilotCodeReviewOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesCopilotCodeReviewOutputReference = RepositoryRulesetRulesCopilotCodeReviewOutputReference;
function repositoryRulesetRulesFileExtensionRestrictionToTerraform(struct) {
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
function repositoryRulesetRulesFileExtensionRestrictionToHclTerraform(struct) {
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
var RepositoryRulesetRulesFileExtensionRestrictionOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesFileExtensionRestrictionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesFileExtensionRestrictionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesFileExtensionRestrictionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesFileExtensionRestrictionOutputReference.prototype, "restrictedFileExtensions", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('restricted_file_extensions'));
        },
        set: function (value) {
            this._restrictedFileExtensions = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesFileExtensionRestrictionOutputReference.prototype, "restrictedFileExtensionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictedFileExtensions;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesFileExtensionRestrictionOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesFileExtensionRestrictionOutputReference = RepositoryRulesetRulesFileExtensionRestrictionOutputReference;
function repositoryRulesetRulesFilePathRestrictionToTerraform(struct) {
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
function repositoryRulesetRulesFilePathRestrictionToHclTerraform(struct) {
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
var RepositoryRulesetRulesFilePathRestrictionOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesFilePathRestrictionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesFilePathRestrictionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesFilePathRestrictionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesFilePathRestrictionOutputReference.prototype, "restrictedFilePaths", {
        get: function () {
            return this.getListAttribute('restricted_file_paths');
        },
        set: function (value) {
            this._restrictedFilePaths = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesFilePathRestrictionOutputReference.prototype, "restrictedFilePathsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._restrictedFilePaths;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesFilePathRestrictionOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesFilePathRestrictionOutputReference = RepositoryRulesetRulesFilePathRestrictionOutputReference;
function repositoryRulesetRulesMaxFilePathLengthToTerraform(struct) {
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
function repositoryRulesetRulesMaxFilePathLengthToHclTerraform(struct) {
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
var RepositoryRulesetRulesMaxFilePathLengthOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesMaxFilePathLengthOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesMaxFilePathLengthOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesMaxFilePathLengthOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesMaxFilePathLengthOutputReference.prototype, "maxFilePathLength", {
        get: function () {
            return this.getNumberAttribute('max_file_path_length');
        },
        set: function (value) {
            this._maxFilePathLength = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMaxFilePathLengthOutputReference.prototype, "maxFilePathLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFilePathLength;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesMaxFilePathLengthOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesMaxFilePathLengthOutputReference = RepositoryRulesetRulesMaxFilePathLengthOutputReference;
function repositoryRulesetRulesMaxFileSizeToTerraform(struct) {
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
function repositoryRulesetRulesMaxFileSizeToHclTerraform(struct) {
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
var RepositoryRulesetRulesMaxFileSizeOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesMaxFileSizeOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesMaxFileSizeOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesMaxFileSizeOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesMaxFileSizeOutputReference.prototype, "maxFileSize", {
        get: function () {
            return this.getNumberAttribute('max_file_size');
        },
        set: function (value) {
            this._maxFileSize = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMaxFileSizeOutputReference.prototype, "maxFileSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFileSize;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesMaxFileSizeOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesMaxFileSizeOutputReference = RepositoryRulesetRulesMaxFileSizeOutputReference;
function repositoryRulesetRulesMergeQueueToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        check_response_timeout_minutes: cdktf.numberToTerraform(struct.checkResponseTimeoutMinutes),
        grouping_strategy: cdktf.stringToTerraform(struct.groupingStrategy),
        max_entries_to_build: cdktf.numberToTerraform(struct.maxEntriesToBuild),
        max_entries_to_merge: cdktf.numberToTerraform(struct.maxEntriesToMerge),
        merge_method: cdktf.stringToTerraform(struct.mergeMethod),
        min_entries_to_merge: cdktf.numberToTerraform(struct.minEntriesToMerge),
        min_entries_to_merge_wait_minutes: cdktf.numberToTerraform(struct.minEntriesToMergeWaitMinutes),
    };
}
function repositoryRulesetRulesMergeQueueToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        check_response_timeout_minutes: {
            value: cdktf.numberToHclTerraform(struct.checkResponseTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        grouping_strategy: {
            value: cdktf.stringToHclTerraform(struct.groupingStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_entries_to_build: {
            value: cdktf.numberToHclTerraform(struct.maxEntriesToBuild),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_entries_to_merge: {
            value: cdktf.numberToHclTerraform(struct.maxEntriesToMerge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        merge_method: {
            value: cdktf.stringToHclTerraform(struct.mergeMethod),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        min_entries_to_merge: {
            value: cdktf.numberToHclTerraform(struct.minEntriesToMerge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_entries_to_merge_wait_minutes: {
            value: cdktf.numberToHclTerraform(struct.minEntriesToMergeWaitMinutes),
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
var RepositoryRulesetRulesMergeQueueOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesMergeQueueOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesMergeQueueOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._checkResponseTimeoutMinutes !== undefined) {
                hasAnyValues = true;
                internalValueResult.checkResponseTimeoutMinutes = this._checkResponseTimeoutMinutes;
            }
            if (this._groupingStrategy !== undefined) {
                hasAnyValues = true;
                internalValueResult.groupingStrategy = this._groupingStrategy;
            }
            if (this._maxEntriesToBuild !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxEntriesToBuild = this._maxEntriesToBuild;
            }
            if (this._maxEntriesToMerge !== undefined) {
                hasAnyValues = true;
                internalValueResult.maxEntriesToMerge = this._maxEntriesToMerge;
            }
            if (this._mergeMethod !== undefined) {
                hasAnyValues = true;
                internalValueResult.mergeMethod = this._mergeMethod;
            }
            if (this._minEntriesToMerge !== undefined) {
                hasAnyValues = true;
                internalValueResult.minEntriesToMerge = this._minEntriesToMerge;
            }
            if (this._minEntriesToMergeWaitMinutes !== undefined) {
                hasAnyValues = true;
                internalValueResult.minEntriesToMergeWaitMinutes = this._minEntriesToMergeWaitMinutes;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._checkResponseTimeoutMinutes = undefined;
                this._groupingStrategy = undefined;
                this._maxEntriesToBuild = undefined;
                this._maxEntriesToMerge = undefined;
                this._mergeMethod = undefined;
                this._minEntriesToMerge = undefined;
                this._minEntriesToMergeWaitMinutes = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._checkResponseTimeoutMinutes = value.checkResponseTimeoutMinutes;
                this._groupingStrategy = value.groupingStrategy;
                this._maxEntriesToBuild = value.maxEntriesToBuild;
                this._maxEntriesToMerge = value.maxEntriesToMerge;
                this._mergeMethod = value.mergeMethod;
                this._minEntriesToMerge = value.minEntriesToMerge;
                this._minEntriesToMergeWaitMinutes = value.minEntriesToMergeWaitMinutes;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "checkResponseTimeoutMinutes", {
        get: function () {
            return this.getNumberAttribute('check_response_timeout_minutes');
        },
        set: function (value) {
            this._checkResponseTimeoutMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetCheckResponseTimeoutMinutes = function () {
        this._checkResponseTimeoutMinutes = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "checkResponseTimeoutMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._checkResponseTimeoutMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "groupingStrategy", {
        get: function () {
            return this.getStringAttribute('grouping_strategy');
        },
        set: function (value) {
            this._groupingStrategy = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetGroupingStrategy = function () {
        this._groupingStrategy = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "groupingStrategyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._groupingStrategy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "maxEntriesToBuild", {
        get: function () {
            return this.getNumberAttribute('max_entries_to_build');
        },
        set: function (value) {
            this._maxEntriesToBuild = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetMaxEntriesToBuild = function () {
        this._maxEntriesToBuild = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "maxEntriesToBuildInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxEntriesToBuild;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "maxEntriesToMerge", {
        get: function () {
            return this.getNumberAttribute('max_entries_to_merge');
        },
        set: function (value) {
            this._maxEntriesToMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetMaxEntriesToMerge = function () {
        this._maxEntriesToMerge = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "maxEntriesToMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxEntriesToMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "mergeMethod", {
        get: function () {
            return this.getStringAttribute('merge_method');
        },
        set: function (value) {
            this._mergeMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetMergeMethod = function () {
        this._mergeMethod = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "mergeMethodInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mergeMethod;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "minEntriesToMerge", {
        get: function () {
            return this.getNumberAttribute('min_entries_to_merge');
        },
        set: function (value) {
            this._minEntriesToMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetMinEntriesToMerge = function () {
        this._minEntriesToMerge = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "minEntriesToMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minEntriesToMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "minEntriesToMergeWaitMinutes", {
        get: function () {
            return this.getNumberAttribute('min_entries_to_merge_wait_minutes');
        },
        set: function (value) {
            this._minEntriesToMergeWaitMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesMergeQueueOutputReference.prototype.resetMinEntriesToMergeWaitMinutes = function () {
        this._minEntriesToMergeWaitMinutes = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesMergeQueueOutputReference.prototype, "minEntriesToMergeWaitMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minEntriesToMergeWaitMinutes;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesMergeQueueOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesMergeQueueOutputReference = RepositoryRulesetRulesMergeQueueOutputReference;
function repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct) {
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
function repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct) {
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
var RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "id", {
        get: function () {
            return this.getNumberAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference = RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference;
function repositoryRulesetRulesPullRequestRequiredReviewersToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        file_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.filePatterns),
        minimum_approvals: cdktf.numberToTerraform(struct.minimumApprovals),
        reviewer: repositoryRulesetRulesPullRequestRequiredReviewersReviewerToTerraform(struct.reviewer),
    };
}
function repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform(struct) {
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
            value: repositoryRulesetRulesPullRequestRequiredReviewersReviewerToHclTerraform(struct.reviewer),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesPullRequestRequiredReviewersReviewerList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // reviewer - computed: false, optional: false, required: true
        _this._reviewer = new RepositoryRulesetRulesPullRequestRequiredReviewersReviewerOutputReference(_this, "reviewer");
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "filePatterns", {
        get: function () {
            return this.getListAttribute('file_patterns');
        },
        set: function (value) {
            this._filePatterns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "filePatternsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filePatterns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "minimumApprovals", {
        get: function () {
            return this.getNumberAttribute('minimum_approvals');
        },
        set: function (value) {
            this._minimumApprovals = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "minimumApprovalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._minimumApprovals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "reviewer", {
        get: function () {
            return this._reviewer;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype.putReviewer = function (value) {
        this._reviewer.internalValue = value;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference.prototype, "reviewerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._reviewer.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference = RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference;
var RepositoryRulesetRulesPullRequestRequiredReviewersList = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesPullRequestRequiredReviewersList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetRulesPullRequestRequiredReviewersList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryRulesetRulesPullRequestRequiredReviewersList.prototype.get = function (index) {
        return new RepositoryRulesetRulesPullRequestRequiredReviewersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryRulesetRulesPullRequestRequiredReviewersList;
}(cdktf.ComplexList));
exports.RepositoryRulesetRulesPullRequestRequiredReviewersList = RepositoryRulesetRulesPullRequestRequiredReviewersList;
function repositoryRulesetRulesPullRequestToTerraform(struct) {
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
        required_reviewers: cdktf.listMapper(repositoryRulesetRulesPullRequestRequiredReviewersToTerraform, true)(struct.requiredReviewers),
    };
}
function repositoryRulesetRulesPullRequestToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(repositoryRulesetRulesPullRequestRequiredReviewersToHclTerraform, true)(struct.requiredReviewers),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesPullRequestRequiredReviewersList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryRulesetRulesPullRequestOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesPullRequestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesPullRequestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_reviewers - computed: false, optional: true, required: false
        _this._requiredReviewers = new RepositoryRulesetRulesPullRequestRequiredReviewersList(_this, "required_reviewers", false);
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "allowedMergeMethods", {
        get: function () {
            return this.getListAttribute('allowed_merge_methods');
        },
        set: function (value) {
            this._allowedMergeMethods = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetAllowedMergeMethods = function () {
        this._allowedMergeMethods = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "allowedMergeMethodsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowedMergeMethods;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "dismissStaleReviewsOnPush", {
        get: function () {
            return this.getBooleanAttribute('dismiss_stale_reviews_on_push');
        },
        set: function (value) {
            this._dismissStaleReviewsOnPush = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetDismissStaleReviewsOnPush = function () {
        this._dismissStaleReviewsOnPush = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "dismissStaleReviewsOnPushInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dismissStaleReviewsOnPush;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requireCodeOwnerReview", {
        get: function () {
            return this.getBooleanAttribute('require_code_owner_review');
        },
        set: function (value) {
            this._requireCodeOwnerReview = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetRequireCodeOwnerReview = function () {
        this._requireCodeOwnerReview = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requireCodeOwnerReviewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireCodeOwnerReview;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requireLastPushApproval", {
        get: function () {
            return this.getBooleanAttribute('require_last_push_approval');
        },
        set: function (value) {
            this._requireLastPushApproval = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetRequireLastPushApproval = function () {
        this._requireLastPushApproval = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requireLastPushApprovalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requireLastPushApproval;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requiredApprovingReviewCount", {
        get: function () {
            return this.getNumberAttribute('required_approving_review_count');
        },
        set: function (value) {
            this._requiredApprovingReviewCount = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetRequiredApprovingReviewCount = function () {
        this._requiredApprovingReviewCount = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requiredApprovingReviewCountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredApprovingReviewCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requiredReviewThreadResolution", {
        get: function () {
            return this.getBooleanAttribute('required_review_thread_resolution');
        },
        set: function (value) {
            this._requiredReviewThreadResolution = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetRequiredReviewThreadResolution = function () {
        this._requiredReviewThreadResolution = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requiredReviewThreadResolutionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredReviewThreadResolution;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requiredReviewers", {
        get: function () {
            return this._requiredReviewers;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesPullRequestOutputReference.prototype.putRequiredReviewers = function (value) {
        this._requiredReviewers.internalValue = value;
    };
    RepositoryRulesetRulesPullRequestOutputReference.prototype.resetRequiredReviewers = function () {
        this._requiredReviewers.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesPullRequestOutputReference.prototype, "requiredReviewersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredReviewers.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesPullRequestOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesPullRequestOutputReference = RepositoryRulesetRulesPullRequestOutputReference;
function repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform(struct) {
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
function repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform(struct) {
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
var RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "alertsThreshold", {
        get: function () {
            return this.getStringAttribute('alerts_threshold');
        },
        set: function (value) {
            this._alertsThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "alertsThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alertsThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "securityAlertsThreshold", {
        get: function () {
            return this.getStringAttribute('security_alerts_threshold');
        },
        set: function (value) {
            this._securityAlertsThreshold = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "securityAlertsThresholdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityAlertsThreshold;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "tool", {
        get: function () {
            return this.getStringAttribute('tool');
        },
        set: function (value) {
            this._tool = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference.prototype, "toolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tool;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference = RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference;
var RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList.prototype.get = function (index) {
        return new RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
}(cdktf.ComplexList));
exports.RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList = RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList;
function repositoryRulesetRulesRequiredCodeScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        required_code_scanning_tool: cdktf.listMapper(repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToTerraform, true)(struct.requiredCodeScanningTool),
    };
}
function repositoryRulesetRulesRequiredCodeScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        required_code_scanning_tool: {
            value: cdktf.listMapperHcl(repositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolToHclTerraform, true)(struct.requiredCodeScanningTool),
            isBlock: true,
            type: "set",
            storageClassType: "RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryRulesetRulesRequiredCodeScanningOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredCodeScanningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesRequiredCodeScanningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_code_scanning_tool - computed: false, optional: false, required: true
        _this._requiredCodeScanningTool = new RepositoryRulesetRulesRequiredCodeScanningRequiredCodeScanningToolList(_this, "required_code_scanning_tool", true);
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningOutputReference.prototype, "requiredCodeScanningTool", {
        get: function () {
            return this._requiredCodeScanningTool;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesRequiredCodeScanningOutputReference.prototype.putRequiredCodeScanningTool = function (value) {
        this._requiredCodeScanningTool.internalValue = value;
    };
    Object.defineProperty(RepositoryRulesetRulesRequiredCodeScanningOutputReference.prototype, "requiredCodeScanningToolInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredCodeScanningTool.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesRequiredCodeScanningOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesRequiredCodeScanningOutputReference = RepositoryRulesetRulesRequiredCodeScanningOutputReference;
function repositoryRulesetRulesRequiredDeploymentsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        required_deployment_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct.requiredDeploymentEnvironments),
    };
}
function repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        required_deployment_environments: {
            value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct.requiredDeploymentEnvironments),
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
var RepositoryRulesetRulesRequiredDeploymentsOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredDeploymentsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesRequiredDeploymentsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesRequiredDeploymentsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._requiredDeploymentEnvironments !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredDeploymentEnvironments = this._requiredDeploymentEnvironments;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._requiredDeploymentEnvironments = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._requiredDeploymentEnvironments = value.requiredDeploymentEnvironments;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredDeploymentsOutputReference.prototype, "requiredDeploymentEnvironments", {
        get: function () {
            return this.getListAttribute('required_deployment_environments');
        },
        set: function (value) {
            this._requiredDeploymentEnvironments = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredDeploymentsOutputReference.prototype, "requiredDeploymentEnvironmentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredDeploymentEnvironments;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesRequiredDeploymentsOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesRequiredDeploymentsOutputReference = RepositoryRulesetRulesRequiredDeploymentsOutputReference;
function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform(struct) {
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
function repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform(struct) {
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
var RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "context", {
        get: function () {
            return this.getStringAttribute('context');
        },
        set: function (value) {
            this._context = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "contextInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "integrationId", {
        get: function () {
            return this.getNumberAttribute('integration_id');
        },
        set: function (value) {
            this._integrationId = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype.resetIntegrationId = function () {
        this._integrationId = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference.prototype, "integrationIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._integrationId;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference = RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference;
var RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList.prototype.get = function (index) {
        return new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList;
}(cdktf.ComplexList));
exports.RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList = RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList;
function repositoryRulesetRulesRequiredStatusChecksToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        do_not_enforce_on_create: cdktf.booleanToTerraform(struct.doNotEnforceOnCreate),
        strict_required_status_checks_policy: cdktf.booleanToTerraform(struct.strictRequiredStatusChecksPolicy),
        required_check: cdktf.listMapper(repositoryRulesetRulesRequiredStatusChecksRequiredCheckToTerraform, true)(struct.requiredCheck),
    };
}
function repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct) {
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
            value: cdktf.listMapperHcl(repositoryRulesetRulesRequiredStatusChecksRequiredCheckToHclTerraform, true)(struct.requiredCheck),
            isBlock: true,
            type: "set",
            storageClassType: "RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryRulesetRulesRequiredStatusChecksOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesRequiredStatusChecksOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesRequiredStatusChecksOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // required_check - computed: false, optional: false, required: true
        _this._requiredCheck = new RepositoryRulesetRulesRequiredStatusChecksRequiredCheckList(_this, "required_check", true);
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "doNotEnforceOnCreate", {
        get: function () {
            return this.getBooleanAttribute('do_not_enforce_on_create');
        },
        set: function (value) {
            this._doNotEnforceOnCreate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype.resetDoNotEnforceOnCreate = function () {
        this._doNotEnforceOnCreate = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "doNotEnforceOnCreateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._doNotEnforceOnCreate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "strictRequiredStatusChecksPolicy", {
        get: function () {
            return this.getBooleanAttribute('strict_required_status_checks_policy');
        },
        set: function (value) {
            this._strictRequiredStatusChecksPolicy = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype.resetStrictRequiredStatusChecksPolicy = function () {
        this._strictRequiredStatusChecksPolicy = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "strictRequiredStatusChecksPolicyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._strictRequiredStatusChecksPolicy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "requiredCheck", {
        get: function () {
            return this._requiredCheck;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype.putRequiredCheck = function (value) {
        this._requiredCheck.internalValue = value;
    };
    Object.defineProperty(RepositoryRulesetRulesRequiredStatusChecksOutputReference.prototype, "requiredCheckInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredCheck.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesRequiredStatusChecksOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesRequiredStatusChecksOutputReference = RepositoryRulesetRulesRequiredStatusChecksOutputReference;
function repositoryRulesetRulesTagNamePatternToTerraform(struct) {
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
function repositoryRulesetRulesTagNamePatternToHclTerraform(struct) {
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
var RepositoryRulesetRulesTagNamePatternOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesTagNamePatternOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesTagNamePatternOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesTagNamePatternOutputReference.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "negate", {
        get: function () {
            return this.getBooleanAttribute('negate');
        },
        set: function (value) {
            this._negate = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesTagNamePatternOutputReference.prototype.resetNegate = function () {
        this._negate = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "negateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._negate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "operator", {
        get: function () {
            return this.getStringAttribute('operator');
        },
        set: function (value) {
            this._operator = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "operatorInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._operator;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "pattern", {
        get: function () {
            return this.getStringAttribute('pattern');
        },
        set: function (value) {
            this._pattern = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesTagNamePatternOutputReference.prototype, "patternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pattern;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesTagNamePatternOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesTagNamePatternOutputReference = RepositoryRulesetRulesTagNamePatternOutputReference;
function repositoryRulesetRulesToTerraform(struct) {
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
        update_allows_fetch_and_merge: cdktf.booleanToTerraform(struct.updateAllowsFetchAndMerge),
        branch_name_pattern: repositoryRulesetRulesBranchNamePatternToTerraform(struct.branchNamePattern),
        commit_author_email_pattern: repositoryRulesetRulesCommitAuthorEmailPatternToTerraform(struct.commitAuthorEmailPattern),
        commit_message_pattern: repositoryRulesetRulesCommitMessagePatternToTerraform(struct.commitMessagePattern),
        committer_email_pattern: repositoryRulesetRulesCommitterEmailPatternToTerraform(struct.committerEmailPattern),
        copilot_code_review: repositoryRulesetRulesCopilotCodeReviewToTerraform(struct.copilotCodeReview),
        file_extension_restriction: repositoryRulesetRulesFileExtensionRestrictionToTerraform(struct.fileExtensionRestriction),
        file_path_restriction: repositoryRulesetRulesFilePathRestrictionToTerraform(struct.filePathRestriction),
        max_file_path_length: repositoryRulesetRulesMaxFilePathLengthToTerraform(struct.maxFilePathLength),
        max_file_size: repositoryRulesetRulesMaxFileSizeToTerraform(struct.maxFileSize),
        merge_queue: repositoryRulesetRulesMergeQueueToTerraform(struct.mergeQueue),
        pull_request: repositoryRulesetRulesPullRequestToTerraform(struct.pullRequest),
        required_code_scanning: repositoryRulesetRulesRequiredCodeScanningToTerraform(struct.requiredCodeScanning),
        required_deployments: repositoryRulesetRulesRequiredDeploymentsToTerraform(struct.requiredDeployments),
        required_status_checks: repositoryRulesetRulesRequiredStatusChecksToTerraform(struct.requiredStatusChecks),
        tag_name_pattern: repositoryRulesetRulesTagNamePatternToTerraform(struct.tagNamePattern),
    };
}
function repositoryRulesetRulesToHclTerraform(struct) {
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
        update_allows_fetch_and_merge: {
            value: cdktf.booleanToHclTerraform(struct.updateAllowsFetchAndMerge),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        branch_name_pattern: {
            value: repositoryRulesetRulesBranchNamePatternToHclTerraform(struct.branchNamePattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesBranchNamePatternList",
        },
        commit_author_email_pattern: {
            value: repositoryRulesetRulesCommitAuthorEmailPatternToHclTerraform(struct.commitAuthorEmailPattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCommitAuthorEmailPatternList",
        },
        commit_message_pattern: {
            value: repositoryRulesetRulesCommitMessagePatternToHclTerraform(struct.commitMessagePattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCommitMessagePatternList",
        },
        committer_email_pattern: {
            value: repositoryRulesetRulesCommitterEmailPatternToHclTerraform(struct.committerEmailPattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCommitterEmailPatternList",
        },
        copilot_code_review: {
            value: repositoryRulesetRulesCopilotCodeReviewToHclTerraform(struct.copilotCodeReview),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesCopilotCodeReviewList",
        },
        file_extension_restriction: {
            value: repositoryRulesetRulesFileExtensionRestrictionToHclTerraform(struct.fileExtensionRestriction),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesFileExtensionRestrictionList",
        },
        file_path_restriction: {
            value: repositoryRulesetRulesFilePathRestrictionToHclTerraform(struct.filePathRestriction),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesFilePathRestrictionList",
        },
        max_file_path_length: {
            value: repositoryRulesetRulesMaxFilePathLengthToHclTerraform(struct.maxFilePathLength),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesMaxFilePathLengthList",
        },
        max_file_size: {
            value: repositoryRulesetRulesMaxFileSizeToHclTerraform(struct.maxFileSize),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesMaxFileSizeList",
        },
        merge_queue: {
            value: repositoryRulesetRulesMergeQueueToHclTerraform(struct.mergeQueue),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesMergeQueueList",
        },
        pull_request: {
            value: repositoryRulesetRulesPullRequestToHclTerraform(struct.pullRequest),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesPullRequestList",
        },
        required_code_scanning: {
            value: repositoryRulesetRulesRequiredCodeScanningToHclTerraform(struct.requiredCodeScanning),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesRequiredCodeScanningList",
        },
        required_deployments: {
            value: repositoryRulesetRulesRequiredDeploymentsToHclTerraform(struct.requiredDeployments),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesRequiredDeploymentsList",
        },
        required_status_checks: {
            value: repositoryRulesetRulesRequiredStatusChecksToHclTerraform(struct.requiredStatusChecks),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesRequiredStatusChecksList",
        },
        tag_name_pattern: {
            value: repositoryRulesetRulesTagNamePatternToHclTerraform(struct.tagNamePattern),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryRulesetRulesTagNamePatternList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryRulesetRulesOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryRulesetRulesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryRulesetRulesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // branch_name_pattern - computed: false, optional: true, required: false
        _this._branchNamePattern = new RepositoryRulesetRulesBranchNamePatternOutputReference(_this, "branch_name_pattern");
        // commit_author_email_pattern - computed: false, optional: true, required: false
        _this._commitAuthorEmailPattern = new RepositoryRulesetRulesCommitAuthorEmailPatternOutputReference(_this, "commit_author_email_pattern");
        // commit_message_pattern - computed: false, optional: true, required: false
        _this._commitMessagePattern = new RepositoryRulesetRulesCommitMessagePatternOutputReference(_this, "commit_message_pattern");
        // committer_email_pattern - computed: false, optional: true, required: false
        _this._committerEmailPattern = new RepositoryRulesetRulesCommitterEmailPatternOutputReference(_this, "committer_email_pattern");
        // copilot_code_review - computed: false, optional: true, required: false
        _this._copilotCodeReview = new RepositoryRulesetRulesCopilotCodeReviewOutputReference(_this, "copilot_code_review");
        // file_extension_restriction - computed: false, optional: true, required: false
        _this._fileExtensionRestriction = new RepositoryRulesetRulesFileExtensionRestrictionOutputReference(_this, "file_extension_restriction");
        // file_path_restriction - computed: false, optional: true, required: false
        _this._filePathRestriction = new RepositoryRulesetRulesFilePathRestrictionOutputReference(_this, "file_path_restriction");
        // max_file_path_length - computed: false, optional: true, required: false
        _this._maxFilePathLength = new RepositoryRulesetRulesMaxFilePathLengthOutputReference(_this, "max_file_path_length");
        // max_file_size - computed: false, optional: true, required: false
        _this._maxFileSize = new RepositoryRulesetRulesMaxFileSizeOutputReference(_this, "max_file_size");
        // merge_queue - computed: false, optional: true, required: false
        _this._mergeQueue = new RepositoryRulesetRulesMergeQueueOutputReference(_this, "merge_queue");
        // pull_request - computed: false, optional: true, required: false
        _this._pullRequest = new RepositoryRulesetRulesPullRequestOutputReference(_this, "pull_request");
        // required_code_scanning - computed: false, optional: true, required: false
        _this._requiredCodeScanning = new RepositoryRulesetRulesRequiredCodeScanningOutputReference(_this, "required_code_scanning");
        // required_deployments - computed: false, optional: true, required: false
        _this._requiredDeployments = new RepositoryRulesetRulesRequiredDeploymentsOutputReference(_this, "required_deployments");
        // required_status_checks - computed: false, optional: true, required: false
        _this._requiredStatusChecks = new RepositoryRulesetRulesRequiredStatusChecksOutputReference(_this, "required_status_checks");
        // tag_name_pattern - computed: false, optional: true, required: false
        _this._tagNamePattern = new RepositoryRulesetRulesTagNamePatternOutputReference(_this, "tag_name_pattern");
        return _this;
    }
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
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
            if (this._updateAllowsFetchAndMerge !== undefined) {
                hasAnyValues = true;
                internalValueResult.updateAllowsFetchAndMerge = this._updateAllowsFetchAndMerge;
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
            if (((_u = this._mergeQueue) === null || _u === void 0 ? void 0 : _u.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.mergeQueue = (_v = this._mergeQueue) === null || _v === void 0 ? void 0 : _v.internalValue;
            }
            if (((_w = this._pullRequest) === null || _w === void 0 ? void 0 : _w.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.pullRequest = (_x = this._pullRequest) === null || _x === void 0 ? void 0 : _x.internalValue;
            }
            if (((_y = this._requiredCodeScanning) === null || _y === void 0 ? void 0 : _y.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredCodeScanning = (_z = this._requiredCodeScanning) === null || _z === void 0 ? void 0 : _z.internalValue;
            }
            if (((_0 = this._requiredDeployments) === null || _0 === void 0 ? void 0 : _0.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredDeployments = (_1 = this._requiredDeployments) === null || _1 === void 0 ? void 0 : _1.internalValue;
            }
            if (((_2 = this._requiredStatusChecks) === null || _2 === void 0 ? void 0 : _2.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.requiredStatusChecks = (_3 = this._requiredStatusChecks) === null || _3 === void 0 ? void 0 : _3.internalValue;
            }
            if (((_4 = this._tagNamePattern) === null || _4 === void 0 ? void 0 : _4.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tagNamePattern = (_5 = this._tagNamePattern) === null || _5 === void 0 ? void 0 : _5.internalValue;
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
                this._updateAllowsFetchAndMerge = undefined;
                this._branchNamePattern.internalValue = undefined;
                this._commitAuthorEmailPattern.internalValue = undefined;
                this._commitMessagePattern.internalValue = undefined;
                this._committerEmailPattern.internalValue = undefined;
                this._copilotCodeReview.internalValue = undefined;
                this._fileExtensionRestriction.internalValue = undefined;
                this._filePathRestriction.internalValue = undefined;
                this._maxFilePathLength.internalValue = undefined;
                this._maxFileSize.internalValue = undefined;
                this._mergeQueue.internalValue = undefined;
                this._pullRequest.internalValue = undefined;
                this._requiredCodeScanning.internalValue = undefined;
                this._requiredDeployments.internalValue = undefined;
                this._requiredStatusChecks.internalValue = undefined;
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
                this._updateAllowsFetchAndMerge = value.updateAllowsFetchAndMerge;
                this._branchNamePattern.internalValue = value.branchNamePattern;
                this._commitAuthorEmailPattern.internalValue = value.commitAuthorEmailPattern;
                this._commitMessagePattern.internalValue = value.commitMessagePattern;
                this._committerEmailPattern.internalValue = value.committerEmailPattern;
                this._copilotCodeReview.internalValue = value.copilotCodeReview;
                this._fileExtensionRestriction.internalValue = value.fileExtensionRestriction;
                this._filePathRestriction.internalValue = value.filePathRestriction;
                this._maxFilePathLength.internalValue = value.maxFilePathLength;
                this._maxFileSize.internalValue = value.maxFileSize;
                this._mergeQueue.internalValue = value.mergeQueue;
                this._pullRequest.internalValue = value.pullRequest;
                this._requiredCodeScanning.internalValue = value.requiredCodeScanning;
                this._requiredDeployments.internalValue = value.requiredDeployments;
                this._requiredStatusChecks.internalValue = value.requiredStatusChecks;
                this._tagNamePattern.internalValue = value.tagNamePattern;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "creation", {
        get: function () {
            return this.getBooleanAttribute('creation');
        },
        set: function (value) {
            this._creation = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetCreation = function () {
        this._creation = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "creationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._creation;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "deletion", {
        get: function () {
            return this.getBooleanAttribute('deletion');
        },
        set: function (value) {
            this._deletion = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetDeletion = function () {
        this._deletion = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "deletionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deletion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "nonFastForward", {
        get: function () {
            return this.getBooleanAttribute('non_fast_forward');
        },
        set: function (value) {
            this._nonFastForward = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetNonFastForward = function () {
        this._nonFastForward = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "nonFastForwardInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._nonFastForward;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredLinearHistory", {
        get: function () {
            return this.getBooleanAttribute('required_linear_history');
        },
        set: function (value) {
            this._requiredLinearHistory = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetRequiredLinearHistory = function () {
        this._requiredLinearHistory = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredLinearHistoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredLinearHistory;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredSignatures", {
        get: function () {
            return this.getBooleanAttribute('required_signatures');
        },
        set: function (value) {
            this._requiredSignatures = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetRequiredSignatures = function () {
        this._requiredSignatures = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredSignaturesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredSignatures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "update", {
        get: function () {
            return this.getBooleanAttribute('update');
        },
        set: function (value) {
            this._update = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetUpdate = function () {
        this._update = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "updateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._update;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "updateAllowsFetchAndMerge", {
        get: function () {
            return this.getBooleanAttribute('update_allows_fetch_and_merge');
        },
        set: function (value) {
            this._updateAllowsFetchAndMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.resetUpdateAllowsFetchAndMerge = function () {
        this._updateAllowsFetchAndMerge = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "updateAllowsFetchAndMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._updateAllowsFetchAndMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "branchNamePattern", {
        get: function () {
            return this._branchNamePattern;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putBranchNamePattern = function (value) {
        this._branchNamePattern.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetBranchNamePattern = function () {
        this._branchNamePattern.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "branchNamePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branchNamePattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "commitAuthorEmailPattern", {
        get: function () {
            return this._commitAuthorEmailPattern;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putCommitAuthorEmailPattern = function (value) {
        this._commitAuthorEmailPattern.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetCommitAuthorEmailPattern = function () {
        this._commitAuthorEmailPattern.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "commitAuthorEmailPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitAuthorEmailPattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "commitMessagePattern", {
        get: function () {
            return this._commitMessagePattern;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putCommitMessagePattern = function (value) {
        this._commitMessagePattern.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetCommitMessagePattern = function () {
        this._commitMessagePattern.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "commitMessagePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._commitMessagePattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "committerEmailPattern", {
        get: function () {
            return this._committerEmailPattern;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putCommitterEmailPattern = function (value) {
        this._committerEmailPattern.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetCommitterEmailPattern = function () {
        this._committerEmailPattern.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "committerEmailPatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._committerEmailPattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "copilotCodeReview", {
        get: function () {
            return this._copilotCodeReview;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putCopilotCodeReview = function (value) {
        this._copilotCodeReview.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetCopilotCodeReview = function () {
        this._copilotCodeReview.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "copilotCodeReviewInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._copilotCodeReview.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "fileExtensionRestriction", {
        get: function () {
            return this._fileExtensionRestriction;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putFileExtensionRestriction = function (value) {
        this._fileExtensionRestriction.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetFileExtensionRestriction = function () {
        this._fileExtensionRestriction.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "fileExtensionRestrictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fileExtensionRestriction.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "filePathRestriction", {
        get: function () {
            return this._filePathRestriction;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putFilePathRestriction = function (value) {
        this._filePathRestriction.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetFilePathRestriction = function () {
        this._filePathRestriction.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "filePathRestrictionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filePathRestriction.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "maxFilePathLength", {
        get: function () {
            return this._maxFilePathLength;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putMaxFilePathLength = function (value) {
        this._maxFilePathLength.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetMaxFilePathLength = function () {
        this._maxFilePathLength.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "maxFilePathLengthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFilePathLength.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "maxFileSize", {
        get: function () {
            return this._maxFileSize;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putMaxFileSize = function (value) {
        this._maxFileSize.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetMaxFileSize = function () {
        this._maxFileSize.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "maxFileSizeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxFileSize.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "mergeQueue", {
        get: function () {
            return this._mergeQueue;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putMergeQueue = function (value) {
        this._mergeQueue.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetMergeQueue = function () {
        this._mergeQueue.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "mergeQueueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mergeQueue.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "pullRequest", {
        get: function () {
            return this._pullRequest;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putPullRequest = function (value) {
        this._pullRequest.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetPullRequest = function () {
        this._pullRequest.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "pullRequestInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pullRequest.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredCodeScanning", {
        get: function () {
            return this._requiredCodeScanning;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putRequiredCodeScanning = function (value) {
        this._requiredCodeScanning.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetRequiredCodeScanning = function () {
        this._requiredCodeScanning.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredCodeScanningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredCodeScanning.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredDeployments", {
        get: function () {
            return this._requiredDeployments;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putRequiredDeployments = function (value) {
        this._requiredDeployments.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetRequiredDeployments = function () {
        this._requiredDeployments.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredDeploymentsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredDeployments.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredStatusChecks", {
        get: function () {
            return this._requiredStatusChecks;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putRequiredStatusChecks = function (value) {
        this._requiredStatusChecks.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetRequiredStatusChecks = function () {
        this._requiredStatusChecks.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "requiredStatusChecksInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requiredStatusChecks.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "tagNamePattern", {
        get: function () {
            return this._tagNamePattern;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRulesetRulesOutputReference.prototype.putTagNamePattern = function (value) {
        this._tagNamePattern.internalValue = value;
    };
    RepositoryRulesetRulesOutputReference.prototype.resetTagNamePattern = function () {
        this._tagNamePattern.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRulesetRulesOutputReference.prototype, "tagNamePatternInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagNamePattern.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryRulesetRulesOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryRulesetRulesOutputReference = RepositoryRulesetRulesOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset github_repository_ruleset}
*/
var RepositoryRuleset = /** @class */ (function (_super) {
    __extends(RepositoryRuleset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset github_repository_ruleset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryRulesetConfig
    */
    function RepositoryRuleset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository_ruleset',
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
        _this._bypassActors = new RepositoryRulesetBypassActorsList(_this, "bypass_actors", false);
        // conditions - computed: false, optional: true, required: false
        _this._conditions = new RepositoryRulesetConditionsOutputReference(_this, "conditions");
        // rules - computed: false, optional: false, required: true
        _this._rules = new RepositoryRulesetRulesOutputReference(_this, "rules");
        _this._enforcement = config.enforcement;
        _this._id = config.id;
        _this._name = config.name;
        _this._repository = config.repository;
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
    * Generates CDKTF code for importing a RepositoryRuleset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RepositoryRuleset to import
    * @param importFromId The id of the existing RepositoryRuleset that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository_ruleset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RepositoryRuleset to import is found
    */
    RepositoryRuleset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository_ruleset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(RepositoryRuleset.prototype, "enforcement", {
        get: function () {
            return this.getStringAttribute('enforcement');
        },
        set: function (value) {
            this._enforcement = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "enforcementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enforcement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "etag", {
        // etag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('etag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRuleset.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(RepositoryRuleset.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "rulesetId", {
        // ruleset_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ruleset_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "target", {
        get: function () {
            return this.getStringAttribute('target');
        },
        set: function (value) {
            this._target = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "targetInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._target;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "bypassActors", {
        get: function () {
            return this._bypassActors;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRuleset.prototype.putBypassActors = function (value) {
        this._bypassActors.internalValue = value;
    };
    RepositoryRuleset.prototype.resetBypassActors = function () {
        this._bypassActors.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRuleset.prototype, "bypassActorsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bypassActors.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "conditions", {
        get: function () {
            return this._conditions;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRuleset.prototype.putConditions = function (value) {
        this._conditions.internalValue = value;
    };
    RepositoryRuleset.prototype.resetConditions = function () {
        this._conditions.internalValue = undefined;
    };
    Object.defineProperty(RepositoryRuleset.prototype, "conditionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._conditions.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryRuleset.prototype, "rules", {
        get: function () {
            return this._rules;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryRuleset.prototype.putRules = function (value) {
        this._rules.internalValue = value;
    };
    Object.defineProperty(RepositoryRuleset.prototype, "rulesInput", {
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
    RepositoryRuleset.prototype.synthesizeAttributes = function () {
        return {
            enforcement: cdktf.stringToTerraform(this._enforcement),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            repository: cdktf.stringToTerraform(this._repository),
            target: cdktf.stringToTerraform(this._target),
            bypass_actors: cdktf.listMapper(repositoryRulesetBypassActorsToTerraform, true)(this._bypassActors.internalValue),
            conditions: repositoryRulesetConditionsToTerraform(this._conditions.internalValue),
            rules: repositoryRulesetRulesToTerraform(this._rules.internalValue),
        };
    };
    RepositoryRuleset.prototype.synthesizeHclAttributes = function () {
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
            repository: {
                value: cdktf.stringToHclTerraform(this._repository),
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
                value: cdktf.listMapperHcl(repositoryRulesetBypassActorsToHclTerraform, true)(this._bypassActors.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryRulesetBypassActorsList",
            },
            conditions: {
                value: repositoryRulesetConditionsToHclTerraform(this._conditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryRulesetConditionsList",
            },
            rules: {
                value: repositoryRulesetRulesToHclTerraform(this._rules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryRulesetRulesList",
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
    RepositoryRuleset.tfResourceType = "github_repository_ruleset";
    return RepositoryRuleset;
}(cdktf.TerraformResource));
exports.RepositoryRuleset = RepositoryRuleset;
