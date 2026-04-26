"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository
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
exports.Repository = exports.RepositoryTemplateOutputReference = exports.RepositorySecurityAndAnalysisOutputReference = exports.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference = exports.RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference = exports.RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference = exports.RepositorySecurityAndAnalysisSecretScanningOutputReference = exports.RepositorySecurityAndAnalysisCodeSecurityOutputReference = exports.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference = exports.RepositoryPagesOutputReference = exports.RepositoryPagesSourceOutputReference = void 0;
exports.repositoryPagesSourceToTerraform = repositoryPagesSourceToTerraform;
exports.repositoryPagesSourceToHclTerraform = repositoryPagesSourceToHclTerraform;
exports.repositoryPagesToTerraform = repositoryPagesToTerraform;
exports.repositoryPagesToHclTerraform = repositoryPagesToHclTerraform;
exports.repositorySecurityAndAnalysisAdvancedSecurityToTerraform = repositorySecurityAndAnalysisAdvancedSecurityToTerraform;
exports.repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform = repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform;
exports.repositorySecurityAndAnalysisCodeSecurityToTerraform = repositorySecurityAndAnalysisCodeSecurityToTerraform;
exports.repositorySecurityAndAnalysisCodeSecurityToHclTerraform = repositorySecurityAndAnalysisCodeSecurityToHclTerraform;
exports.repositorySecurityAndAnalysisSecretScanningToTerraform = repositorySecurityAndAnalysisSecretScanningToTerraform;
exports.repositorySecurityAndAnalysisSecretScanningToHclTerraform = repositorySecurityAndAnalysisSecretScanningToHclTerraform;
exports.repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform = repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform;
exports.repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform = repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform;
exports.repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform = repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform;
exports.repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform = repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform;
exports.repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform = repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform;
exports.repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform = repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform;
exports.repositorySecurityAndAnalysisToTerraform = repositorySecurityAndAnalysisToTerraform;
exports.repositorySecurityAndAnalysisToHclTerraform = repositorySecurityAndAnalysisToHclTerraform;
exports.repositoryTemplateToTerraform = repositoryTemplateToTerraform;
exports.repositoryTemplateToHclTerraform = repositoryTemplateToHclTerraform;
var cdktf = require("cdktf");
function repositoryPagesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        branch: cdktf.stringToTerraform(struct.branch),
        path: cdktf.stringToTerraform(struct.path),
    };
}
function repositoryPagesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        branch: {
            value: cdktf.stringToHclTerraform(struct.branch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        path: {
            value: cdktf.stringToHclTerraform(struct.path),
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
var RepositoryPagesSourceOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryPagesSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryPagesSourceOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryPagesSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._branch !== undefined) {
                hasAnyValues = true;
                internalValueResult.branch = this._branch;
            }
            if (this._path !== undefined) {
                hasAnyValues = true;
                internalValueResult.path = this._path;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._branch = undefined;
                this._path = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._branch = value.branch;
                this._path = value.path;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesSourceOutputReference.prototype, "branch", {
        get: function () {
            return this.getStringAttribute('branch');
        },
        set: function (value) {
            this._branch = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesSourceOutputReference.prototype, "branchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._branch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesSourceOutputReference.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesSourceOutputReference.prototype.resetPath = function () {
        this._path = undefined;
    };
    Object.defineProperty(RepositoryPagesSourceOutputReference.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryPagesSourceOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryPagesSourceOutputReference = RepositoryPagesSourceOutputReference;
function repositoryPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        build_type: cdktf.stringToTerraform(struct.buildType),
        cname: cdktf.stringToTerraform(struct.cname),
        source: repositoryPagesSourceToTerraform(struct.source),
    };
}
function repositoryPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        build_type: {
            value: cdktf.stringToHclTerraform(struct.buildType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cname: {
            value: cdktf.stringToHclTerraform(struct.cname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source: {
            value: repositoryPagesSourceToHclTerraform(struct.source),
            isBlock: true,
            type: "list",
            storageClassType: "RepositoryPagesSourceList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositoryPagesOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryPagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryPagesOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // source - computed: false, optional: true, required: false
        _this._source = new RepositoryPagesSourceOutputReference(_this, "source");
        return _this;
    }
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._buildType !== undefined) {
                hasAnyValues = true;
                internalValueResult.buildType = this._buildType;
            }
            if (this._cname !== undefined) {
                hasAnyValues = true;
                internalValueResult.cname = this._cname;
            }
            if (((_a = this._source) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.source = (_b = this._source) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._buildType = undefined;
                this._cname = undefined;
                this._source.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._buildType = value.buildType;
                this._cname = value.cname;
                this._source.internalValue = value.source;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "buildType", {
        get: function () {
            return this.getStringAttribute('build_type');
        },
        set: function (value) {
            this._buildType = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesOutputReference.prototype.resetBuildType = function () {
        this._buildType = undefined;
    };
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "buildTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._buildType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "cname", {
        get: function () {
            return this.getStringAttribute('cname');
        },
        set: function (value) {
            this._cname = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesOutputReference.prototype.resetCname = function () {
        this._cname = undefined;
    };
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "cnameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "custom404", {
        // custom_404 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('custom_404');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryPagesOutputReference.prototype.putSource = function (value) {
        this._source.internalValue = value;
    };
    RepositoryPagesOutputReference.prototype.resetSource = function () {
        this._source.internalValue = undefined;
    };
    Object.defineProperty(RepositoryPagesOutputReference.prototype, "sourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._source.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryPagesOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryPagesOutputReference = RepositoryPagesOutputReference;
function repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
function repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var RepositorySecurityAndAnalysisAdvancedSecurityOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisAdvancedSecurityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._status = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisAdvancedSecurityOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisAdvancedSecurityOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisAdvancedSecurityOutputReference = RepositorySecurityAndAnalysisAdvancedSecurityOutputReference;
function repositorySecurityAndAnalysisCodeSecurityToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
function repositorySecurityAndAnalysisCodeSecurityToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var RepositorySecurityAndAnalysisCodeSecurityOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisCodeSecurityOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisCodeSecurityOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisCodeSecurityOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._status = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisCodeSecurityOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisCodeSecurityOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisCodeSecurityOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisCodeSecurityOutputReference = RepositorySecurityAndAnalysisCodeSecurityOutputReference;
function repositorySecurityAndAnalysisSecretScanningToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
function repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var RepositorySecurityAndAnalysisSecretScanningOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisSecretScanningOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisSecretScanningOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._status = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisSecretScanningOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisSecretScanningOutputReference = RepositorySecurityAndAnalysisSecretScanningOutputReference;
function repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
function repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._status = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference = RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference;
function repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
function repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._status = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference = RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference;
function repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        status: cdktf.stringToTerraform(struct.status),
    };
}
function repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        status: {
            value: cdktf.stringToHclTerraform(struct.status),
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
var RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._status = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference = RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference;
function repositorySecurityAndAnalysisToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        advanced_security: repositorySecurityAndAnalysisAdvancedSecurityToTerraform(struct.advancedSecurity),
        code_security: repositorySecurityAndAnalysisCodeSecurityToTerraform(struct.codeSecurity),
        secret_scanning: repositorySecurityAndAnalysisSecretScanningToTerraform(struct.secretScanning),
        secret_scanning_ai_detection: repositorySecurityAndAnalysisSecretScanningAiDetectionToTerraform(struct.secretScanningAiDetection),
        secret_scanning_non_provider_patterns: repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToTerraform(struct.secretScanningNonProviderPatterns),
        secret_scanning_push_protection: repositorySecurityAndAnalysisSecretScanningPushProtectionToTerraform(struct.secretScanningPushProtection),
    };
}
function repositorySecurityAndAnalysisToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        advanced_security: {
            value: repositorySecurityAndAnalysisAdvancedSecurityToHclTerraform(struct.advancedSecurity),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisAdvancedSecurityList",
        },
        code_security: {
            value: repositorySecurityAndAnalysisCodeSecurityToHclTerraform(struct.codeSecurity),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisCodeSecurityList",
        },
        secret_scanning: {
            value: repositorySecurityAndAnalysisSecretScanningToHclTerraform(struct.secretScanning),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningList",
        },
        secret_scanning_ai_detection: {
            value: repositorySecurityAndAnalysisSecretScanningAiDetectionToHclTerraform(struct.secretScanningAiDetection),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningAiDetectionList",
        },
        secret_scanning_non_provider_patterns: {
            value: repositorySecurityAndAnalysisSecretScanningNonProviderPatternsToHclTerraform(struct.secretScanningNonProviderPatterns),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsList",
        },
        secret_scanning_push_protection: {
            value: repositorySecurityAndAnalysisSecretScanningPushProtectionToHclTerraform(struct.secretScanningPushProtection),
            isBlock: true,
            type: "list",
            storageClassType: "RepositorySecurityAndAnalysisSecretScanningPushProtectionList",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(function (_a) {
        var _ = _a[0], value = _a[1];
        return value !== undefined && value.value !== undefined;
    }));
}
var RepositorySecurityAndAnalysisOutputReference = /** @class */ (function (_super) {
    __extends(RepositorySecurityAndAnalysisOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositorySecurityAndAnalysisOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        // advanced_security - computed: false, optional: true, required: false
        _this._advancedSecurity = new RepositorySecurityAndAnalysisAdvancedSecurityOutputReference(_this, "advanced_security");
        // code_security - computed: false, optional: true, required: false
        _this._codeSecurity = new RepositorySecurityAndAnalysisCodeSecurityOutputReference(_this, "code_security");
        // secret_scanning - computed: false, optional: true, required: false
        _this._secretScanning = new RepositorySecurityAndAnalysisSecretScanningOutputReference(_this, "secret_scanning");
        // secret_scanning_ai_detection - computed: false, optional: true, required: false
        _this._secretScanningAiDetection = new RepositorySecurityAndAnalysisSecretScanningAiDetectionOutputReference(_this, "secret_scanning_ai_detection");
        // secret_scanning_non_provider_patterns - computed: false, optional: true, required: false
        _this._secretScanningNonProviderPatterns = new RepositorySecurityAndAnalysisSecretScanningNonProviderPatternsOutputReference(_this, "secret_scanning_non_provider_patterns");
        // secret_scanning_push_protection - computed: false, optional: true, required: false
        _this._secretScanningPushProtection = new RepositorySecurityAndAnalysisSecretScanningPushProtectionOutputReference(_this, "secret_scanning_push_protection");
        return _this;
    }
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._advancedSecurity) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.advancedSecurity = (_b = this._advancedSecurity) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._codeSecurity) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.codeSecurity = (_d = this._codeSecurity) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (((_e = this._secretScanning) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretScanning = (_f = this._secretScanning) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (((_g = this._secretScanningAiDetection) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretScanningAiDetection = (_h = this._secretScanningAiDetection) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (((_j = this._secretScanningNonProviderPatterns) === null || _j === void 0 ? void 0 : _j.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretScanningNonProviderPatterns = (_k = this._secretScanningNonProviderPatterns) === null || _k === void 0 ? void 0 : _k.internalValue;
            }
            if (((_l = this._secretScanningPushProtection) === null || _l === void 0 ? void 0 : _l.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.secretScanningPushProtection = (_m = this._secretScanningPushProtection) === null || _m === void 0 ? void 0 : _m.internalValue;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._advancedSecurity.internalValue = undefined;
                this._codeSecurity.internalValue = undefined;
                this._secretScanning.internalValue = undefined;
                this._secretScanningAiDetection.internalValue = undefined;
                this._secretScanningNonProviderPatterns.internalValue = undefined;
                this._secretScanningPushProtection.internalValue = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._advancedSecurity.internalValue = value.advancedSecurity;
                this._codeSecurity.internalValue = value.codeSecurity;
                this._secretScanning.internalValue = value.secretScanning;
                this._secretScanningAiDetection.internalValue = value.secretScanningAiDetection;
                this._secretScanningNonProviderPatterns.internalValue = value.secretScanningNonProviderPatterns;
                this._secretScanningPushProtection.internalValue = value.secretScanningPushProtection;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "advancedSecurity", {
        get: function () {
            return this._advancedSecurity;
        },
        enumerable: false,
        configurable: true
    });
    RepositorySecurityAndAnalysisOutputReference.prototype.putAdvancedSecurity = function (value) {
        this._advancedSecurity.internalValue = value;
    };
    RepositorySecurityAndAnalysisOutputReference.prototype.resetAdvancedSecurity = function () {
        this._advancedSecurity.internalValue = undefined;
    };
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "advancedSecurityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._advancedSecurity.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "codeSecurity", {
        get: function () {
            return this._codeSecurity;
        },
        enumerable: false,
        configurable: true
    });
    RepositorySecurityAndAnalysisOutputReference.prototype.putCodeSecurity = function (value) {
        this._codeSecurity.internalValue = value;
    };
    RepositorySecurityAndAnalysisOutputReference.prototype.resetCodeSecurity = function () {
        this._codeSecurity.internalValue = undefined;
    };
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "codeSecurityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._codeSecurity.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanning", {
        get: function () {
            return this._secretScanning;
        },
        enumerable: false,
        configurable: true
    });
    RepositorySecurityAndAnalysisOutputReference.prototype.putSecretScanning = function (value) {
        this._secretScanning.internalValue = value;
    };
    RepositorySecurityAndAnalysisOutputReference.prototype.resetSecretScanning = function () {
        this._secretScanning.internalValue = undefined;
    };
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanning.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningAiDetection", {
        get: function () {
            return this._secretScanningAiDetection;
        },
        enumerable: false,
        configurable: true
    });
    RepositorySecurityAndAnalysisOutputReference.prototype.putSecretScanningAiDetection = function (value) {
        this._secretScanningAiDetection.internalValue = value;
    };
    RepositorySecurityAndAnalysisOutputReference.prototype.resetSecretScanningAiDetection = function () {
        this._secretScanningAiDetection.internalValue = undefined;
    };
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningAiDetectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningAiDetection.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningNonProviderPatterns", {
        get: function () {
            return this._secretScanningNonProviderPatterns;
        },
        enumerable: false,
        configurable: true
    });
    RepositorySecurityAndAnalysisOutputReference.prototype.putSecretScanningNonProviderPatterns = function (value) {
        this._secretScanningNonProviderPatterns.internalValue = value;
    };
    RepositorySecurityAndAnalysisOutputReference.prototype.resetSecretScanningNonProviderPatterns = function () {
        this._secretScanningNonProviderPatterns.internalValue = undefined;
    };
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningNonProviderPatternsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningNonProviderPatterns.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningPushProtection", {
        get: function () {
            return this._secretScanningPushProtection;
        },
        enumerable: false,
        configurable: true
    });
    RepositorySecurityAndAnalysisOutputReference.prototype.putSecretScanningPushProtection = function (value) {
        this._secretScanningPushProtection.internalValue = value;
    };
    RepositorySecurityAndAnalysisOutputReference.prototype.resetSecretScanningPushProtection = function () {
        this._secretScanningPushProtection.internalValue = undefined;
    };
    Object.defineProperty(RepositorySecurityAndAnalysisOutputReference.prototype, "secretScanningPushProtectionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretScanningPushProtection.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    return RepositorySecurityAndAnalysisOutputReference;
}(cdktf.ComplexObject));
exports.RepositorySecurityAndAnalysisOutputReference = RepositorySecurityAndAnalysisOutputReference;
function repositoryTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        include_all_branches: cdktf.booleanToTerraform(struct.includeAllBranches),
        owner: cdktf.stringToTerraform(struct.owner),
        repository: cdktf.stringToTerraform(struct.repository),
    };
}
function repositoryTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        include_all_branches: {
            value: cdktf.booleanToHclTerraform(struct.includeAllBranches),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        owner: {
            value: cdktf.stringToHclTerraform(struct.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository: {
            value: cdktf.stringToHclTerraform(struct.repository),
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
var RepositoryTemplateOutputReference = /** @class */ (function (_super) {
    __extends(RepositoryTemplateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function RepositoryTemplateOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false, 0) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._includeAllBranches !== undefined) {
                hasAnyValues = true;
                internalValueResult.includeAllBranches = this._includeAllBranches;
            }
            if (this._owner !== undefined) {
                hasAnyValues = true;
                internalValueResult.owner = this._owner;
            }
            if (this._repository !== undefined) {
                hasAnyValues = true;
                internalValueResult.repository = this._repository;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this._includeAllBranches = undefined;
                this._owner = undefined;
                this._repository = undefined;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this._includeAllBranches = value.includeAllBranches;
                this._owner = value.owner;
                this._repository = value.repository;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "includeAllBranches", {
        get: function () {
            return this.getBooleanAttribute('include_all_branches');
        },
        set: function (value) {
            this._includeAllBranches = value;
        },
        enumerable: false,
        configurable: true
    });
    RepositoryTemplateOutputReference.prototype.resetIncludeAllBranches = function () {
        this._includeAllBranches = undefined;
    };
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "includeAllBranchesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._includeAllBranches;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "owner", {
        get: function () {
            return this.getStringAttribute('owner');
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "ownerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "repository", {
        get: function () {
            return this.getStringAttribute('repository');
        },
        set: function (value) {
            this._repository = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RepositoryTemplateOutputReference.prototype, "repositoryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._repository;
        },
        enumerable: false,
        configurable: true
    });
    return RepositoryTemplateOutputReference;
}(cdktf.ComplexObject));
exports.RepositoryTemplateOutputReference = RepositoryTemplateOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository github_repository}
*/
var Repository = /** @class */ (function (_super) {
    __extends(Repository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository github_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RepositoryConfig
    */
    function Repository(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'github_repository',
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
        // pages - computed: false, optional: true, required: false
        _this._pages = new RepositoryPagesOutputReference(_this, "pages");
        // security_and_analysis - computed: false, optional: true, required: false
        _this._securityAndAnalysis = new RepositorySecurityAndAnalysisOutputReference(_this, "security_and_analysis");
        // template - computed: false, optional: true, required: false
        _this._template = new RepositoryTemplateOutputReference(_this, "template");
        _this._allowAutoMerge = config.allowAutoMerge;
        _this._allowForking = config.allowForking;
        _this._allowMergeCommit = config.allowMergeCommit;
        _this._allowRebaseMerge = config.allowRebaseMerge;
        _this._allowSquashMerge = config.allowSquashMerge;
        _this._allowUpdateBranch = config.allowUpdateBranch;
        _this._archiveOnDestroy = config.archiveOnDestroy;
        _this._archived = config.archived;
        _this._autoInit = config.autoInit;
        _this._defaultBranch = config.defaultBranch;
        _this._deleteBranchOnMerge = config.deleteBranchOnMerge;
        _this._description = config.description;
        _this._etag = config.etag;
        _this._fork = config.fork;
        _this._gitignoreTemplate = config.gitignoreTemplate;
        _this._hasDiscussions = config.hasDiscussions;
        _this._hasDownloads = config.hasDownloads;
        _this._hasIssues = config.hasIssues;
        _this._hasProjects = config.hasProjects;
        _this._hasWiki = config.hasWiki;
        _this._homepageUrl = config.homepageUrl;
        _this._id = config.id;
        _this._ignoreVulnerabilityAlertsDuringRead = config.ignoreVulnerabilityAlertsDuringRead;
        _this._isTemplate = config.isTemplate;
        _this._licenseTemplate = config.licenseTemplate;
        _this._mergeCommitMessage = config.mergeCommitMessage;
        _this._mergeCommitTitle = config.mergeCommitTitle;
        _this._name = config.name;
        _this._private = config.private;
        _this._sourceOwner = config.sourceOwner;
        _this._sourceRepo = config.sourceRepo;
        _this._squashMergeCommitMessage = config.squashMergeCommitMessage;
        _this._squashMergeCommitTitle = config.squashMergeCommitTitle;
        _this._topics = config.topics;
        _this._visibility = config.visibility;
        _this._vulnerabilityAlerts = config.vulnerabilityAlerts;
        _this._webCommitSignoffRequired = config.webCommitSignoffRequired;
        _this._pages.internalValue = config.pages;
        _this._securityAndAnalysis.internalValue = config.securityAndAnalysis;
        _this._template.internalValue = config.template;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Repository to import
    * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/resources/repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Repository to import is found
    */
    Repository.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository", importId: importFromId, provider: provider });
    };
    Object.defineProperty(Repository.prototype, "allowAutoMerge", {
        get: function () {
            return this.getBooleanAttribute('allow_auto_merge');
        },
        set: function (value) {
            this._allowAutoMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAllowAutoMerge = function () {
        this._allowAutoMerge = undefined;
    };
    Object.defineProperty(Repository.prototype, "allowAutoMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowAutoMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "allowForking", {
        get: function () {
            return this.getBooleanAttribute('allow_forking');
        },
        set: function (value) {
            this._allowForking = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAllowForking = function () {
        this._allowForking = undefined;
    };
    Object.defineProperty(Repository.prototype, "allowForkingInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowForking;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "allowMergeCommit", {
        get: function () {
            return this.getBooleanAttribute('allow_merge_commit');
        },
        set: function (value) {
            this._allowMergeCommit = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAllowMergeCommit = function () {
        this._allowMergeCommit = undefined;
    };
    Object.defineProperty(Repository.prototype, "allowMergeCommitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowMergeCommit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "allowRebaseMerge", {
        get: function () {
            return this.getBooleanAttribute('allow_rebase_merge');
        },
        set: function (value) {
            this._allowRebaseMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAllowRebaseMerge = function () {
        this._allowRebaseMerge = undefined;
    };
    Object.defineProperty(Repository.prototype, "allowRebaseMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowRebaseMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "allowSquashMerge", {
        get: function () {
            return this.getBooleanAttribute('allow_squash_merge');
        },
        set: function (value) {
            this._allowSquashMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAllowSquashMerge = function () {
        this._allowSquashMerge = undefined;
    };
    Object.defineProperty(Repository.prototype, "allowSquashMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowSquashMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "allowUpdateBranch", {
        get: function () {
            return this.getBooleanAttribute('allow_update_branch');
        },
        set: function (value) {
            this._allowUpdateBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAllowUpdateBranch = function () {
        this._allowUpdateBranch = undefined;
    };
    Object.defineProperty(Repository.prototype, "allowUpdateBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowUpdateBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "archiveOnDestroy", {
        get: function () {
            return this.getBooleanAttribute('archive_on_destroy');
        },
        set: function (value) {
            this._archiveOnDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetArchiveOnDestroy = function () {
        this._archiveOnDestroy = undefined;
    };
    Object.defineProperty(Repository.prototype, "archiveOnDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._archiveOnDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "archived", {
        get: function () {
            return this.getBooleanAttribute('archived');
        },
        set: function (value) {
            this._archived = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetArchived = function () {
        this._archived = undefined;
    };
    Object.defineProperty(Repository.prototype, "archivedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._archived;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "autoInit", {
        get: function () {
            return this.getBooleanAttribute('auto_init');
        },
        set: function (value) {
            this._autoInit = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetAutoInit = function () {
        this._autoInit = undefined;
    };
    Object.defineProperty(Repository.prototype, "autoInitInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoInit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "defaultBranch", {
        get: function () {
            return this.getStringAttribute('default_branch');
        },
        set: function (value) {
            this._defaultBranch = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetDefaultBranch = function () {
        this._defaultBranch = undefined;
    };
    Object.defineProperty(Repository.prototype, "defaultBranchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._defaultBranch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "deleteBranchOnMerge", {
        get: function () {
            return this.getBooleanAttribute('delete_branch_on_merge');
        },
        set: function (value) {
            this._deleteBranchOnMerge = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetDeleteBranchOnMerge = function () {
        this._deleteBranchOnMerge = undefined;
    };
    Object.defineProperty(Repository.prototype, "deleteBranchOnMergeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deleteBranchOnMerge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Repository.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "etag", {
        get: function () {
            return this.getStringAttribute('etag');
        },
        set: function (value) {
            this._etag = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetEtag = function () {
        this._etag = undefined;
    };
    Object.defineProperty(Repository.prototype, "etagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._etag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "fork", {
        get: function () {
            return this.getStringAttribute('fork');
        },
        set: function (value) {
            this._fork = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetFork = function () {
        this._fork = undefined;
    };
    Object.defineProperty(Repository.prototype, "forkInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fork;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "fullName", {
        // full_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('full_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "gitCloneUrl", {
        // git_clone_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('git_clone_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "gitignoreTemplate", {
        get: function () {
            return this.getStringAttribute('gitignore_template');
        },
        set: function (value) {
            this._gitignoreTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetGitignoreTemplate = function () {
        this._gitignoreTemplate = undefined;
    };
    Object.defineProperty(Repository.prototype, "gitignoreTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._gitignoreTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "hasDiscussions", {
        get: function () {
            return this.getBooleanAttribute('has_discussions');
        },
        set: function (value) {
            this._hasDiscussions = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetHasDiscussions = function () {
        this._hasDiscussions = undefined;
    };
    Object.defineProperty(Repository.prototype, "hasDiscussionsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasDiscussions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "hasDownloads", {
        get: function () {
            return this.getBooleanAttribute('has_downloads');
        },
        set: function (value) {
            this._hasDownloads = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetHasDownloads = function () {
        this._hasDownloads = undefined;
    };
    Object.defineProperty(Repository.prototype, "hasDownloadsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasDownloads;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "hasIssues", {
        get: function () {
            return this.getBooleanAttribute('has_issues');
        },
        set: function (value) {
            this._hasIssues = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetHasIssues = function () {
        this._hasIssues = undefined;
    };
    Object.defineProperty(Repository.prototype, "hasIssuesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasIssues;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "hasProjects", {
        get: function () {
            return this.getBooleanAttribute('has_projects');
        },
        set: function (value) {
            this._hasProjects = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetHasProjects = function () {
        this._hasProjects = undefined;
    };
    Object.defineProperty(Repository.prototype, "hasProjectsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasProjects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "hasWiki", {
        get: function () {
            return this.getBooleanAttribute('has_wiki');
        },
        set: function (value) {
            this._hasWiki = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetHasWiki = function () {
        this._hasWiki = undefined;
    };
    Object.defineProperty(Repository.prototype, "hasWikiInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hasWiki;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "homepageUrl", {
        get: function () {
            return this.getStringAttribute('homepage_url');
        },
        set: function (value) {
            this._homepageUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetHomepageUrl = function () {
        this._homepageUrl = undefined;
    };
    Object.defineProperty(Repository.prototype, "homepageUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homepageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "httpCloneUrl", {
        // http_clone_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_clone_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(Repository.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "ignoreVulnerabilityAlertsDuringRead", {
        get: function () {
            return this.getBooleanAttribute('ignore_vulnerability_alerts_during_read');
        },
        set: function (value) {
            this._ignoreVulnerabilityAlertsDuringRead = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetIgnoreVulnerabilityAlertsDuringRead = function () {
        this._ignoreVulnerabilityAlertsDuringRead = undefined;
    };
    Object.defineProperty(Repository.prototype, "ignoreVulnerabilityAlertsDuringReadInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ignoreVulnerabilityAlertsDuringRead;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "isTemplate", {
        get: function () {
            return this.getBooleanAttribute('is_template');
        },
        set: function (value) {
            this._isTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetIsTemplate = function () {
        this._isTemplate = undefined;
    };
    Object.defineProperty(Repository.prototype, "isTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._isTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "licenseTemplate", {
        get: function () {
            return this.getStringAttribute('license_template');
        },
        set: function (value) {
            this._licenseTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetLicenseTemplate = function () {
        this._licenseTemplate = undefined;
    };
    Object.defineProperty(Repository.prototype, "licenseTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._licenseTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "mergeCommitMessage", {
        get: function () {
            return this.getStringAttribute('merge_commit_message');
        },
        set: function (value) {
            this._mergeCommitMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetMergeCommitMessage = function () {
        this._mergeCommitMessage = undefined;
    };
    Object.defineProperty(Repository.prototype, "mergeCommitMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mergeCommitMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "mergeCommitTitle", {
        get: function () {
            return this.getStringAttribute('merge_commit_title');
        },
        set: function (value) {
            this._mergeCommitTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetMergeCommitTitle = function () {
        this._mergeCommitTitle = undefined;
    };
    Object.defineProperty(Repository.prototype, "mergeCommitTitleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._mergeCommitTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "primaryLanguage", {
        // primary_language - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "private", {
        get: function () {
            return this.getBooleanAttribute('private');
        },
        set: function (value) {
            this._private = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetPrivate = function () {
        this._private = undefined;
    };
    Object.defineProperty(Repository.prototype, "privateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._private;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "sourceOwner", {
        get: function () {
            return this.getStringAttribute('source_owner');
        },
        set: function (value) {
            this._sourceOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetSourceOwner = function () {
        this._sourceOwner = undefined;
    };
    Object.defineProperty(Repository.prototype, "sourceOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "sourceRepo", {
        get: function () {
            return this.getStringAttribute('source_repo');
        },
        set: function (value) {
            this._sourceRepo = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetSourceRepo = function () {
        this._sourceRepo = undefined;
    };
    Object.defineProperty(Repository.prototype, "sourceRepoInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceRepo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "squashMergeCommitMessage", {
        get: function () {
            return this.getStringAttribute('squash_merge_commit_message');
        },
        set: function (value) {
            this._squashMergeCommitMessage = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetSquashMergeCommitMessage = function () {
        this._squashMergeCommitMessage = undefined;
    };
    Object.defineProperty(Repository.prototype, "squashMergeCommitMessageInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._squashMergeCommitMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "squashMergeCommitTitle", {
        get: function () {
            return this.getStringAttribute('squash_merge_commit_title');
        },
        set: function (value) {
            this._squashMergeCommitTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetSquashMergeCommitTitle = function () {
        this._squashMergeCommitTitle = undefined;
    };
    Object.defineProperty(Repository.prototype, "squashMergeCommitTitleInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._squashMergeCommitTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "sshCloneUrl", {
        // ssh_clone_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssh_clone_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "svnUrl", {
        // svn_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('svn_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "topics", {
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('topics'));
        },
        set: function (value) {
            this._topics = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetTopics = function () {
        this._topics = undefined;
    };
    Object.defineProperty(Repository.prototype, "topicsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._topics;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "visibility", {
        get: function () {
            return this.getStringAttribute('visibility');
        },
        set: function (value) {
            this._visibility = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetVisibility = function () {
        this._visibility = undefined;
    };
    Object.defineProperty(Repository.prototype, "visibilityInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._visibility;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "vulnerabilityAlerts", {
        get: function () {
            return this.getBooleanAttribute('vulnerability_alerts');
        },
        set: function (value) {
            this._vulnerabilityAlerts = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetVulnerabilityAlerts = function () {
        this._vulnerabilityAlerts = undefined;
    };
    Object.defineProperty(Repository.prototype, "vulnerabilityAlertsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vulnerabilityAlerts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "webCommitSignoffRequired", {
        get: function () {
            return this.getBooleanAttribute('web_commit_signoff_required');
        },
        set: function (value) {
            this._webCommitSignoffRequired = value;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.resetWebCommitSignoffRequired = function () {
        this._webCommitSignoffRequired = undefined;
    };
    Object.defineProperty(Repository.prototype, "webCommitSignoffRequiredInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._webCommitSignoffRequired;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.putPages = function (value) {
        this._pages.internalValue = value;
    };
    Repository.prototype.resetPages = function () {
        this._pages.internalValue = undefined;
    };
    Object.defineProperty(Repository.prototype, "pagesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pages.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "securityAndAnalysis", {
        get: function () {
            return this._securityAndAnalysis;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.putSecurityAndAnalysis = function (value) {
        this._securityAndAnalysis.internalValue = value;
    };
    Repository.prototype.resetSecurityAndAnalysis = function () {
        this._securityAndAnalysis.internalValue = undefined;
    };
    Object.defineProperty(Repository.prototype, "securityAndAnalysisInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._securityAndAnalysis.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "template", {
        get: function () {
            return this._template;
        },
        enumerable: false,
        configurable: true
    });
    Repository.prototype.putTemplate = function (value) {
        this._template.internalValue = value;
    };
    Repository.prototype.resetTemplate = function () {
        this._template.internalValue = undefined;
    };
    Object.defineProperty(Repository.prototype, "templateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._template.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Repository.prototype.synthesizeAttributes = function () {
        return {
            allow_auto_merge: cdktf.booleanToTerraform(this._allowAutoMerge),
            allow_forking: cdktf.booleanToTerraform(this._allowForking),
            allow_merge_commit: cdktf.booleanToTerraform(this._allowMergeCommit),
            allow_rebase_merge: cdktf.booleanToTerraform(this._allowRebaseMerge),
            allow_squash_merge: cdktf.booleanToTerraform(this._allowSquashMerge),
            allow_update_branch: cdktf.booleanToTerraform(this._allowUpdateBranch),
            archive_on_destroy: cdktf.booleanToTerraform(this._archiveOnDestroy),
            archived: cdktf.booleanToTerraform(this._archived),
            auto_init: cdktf.booleanToTerraform(this._autoInit),
            default_branch: cdktf.stringToTerraform(this._defaultBranch),
            delete_branch_on_merge: cdktf.booleanToTerraform(this._deleteBranchOnMerge),
            description: cdktf.stringToTerraform(this._description),
            etag: cdktf.stringToTerraform(this._etag),
            fork: cdktf.stringToTerraform(this._fork),
            gitignore_template: cdktf.stringToTerraform(this._gitignoreTemplate),
            has_discussions: cdktf.booleanToTerraform(this._hasDiscussions),
            has_downloads: cdktf.booleanToTerraform(this._hasDownloads),
            has_issues: cdktf.booleanToTerraform(this._hasIssues),
            has_projects: cdktf.booleanToTerraform(this._hasProjects),
            has_wiki: cdktf.booleanToTerraform(this._hasWiki),
            homepage_url: cdktf.stringToTerraform(this._homepageUrl),
            id: cdktf.stringToTerraform(this._id),
            ignore_vulnerability_alerts_during_read: cdktf.booleanToTerraform(this._ignoreVulnerabilityAlertsDuringRead),
            is_template: cdktf.booleanToTerraform(this._isTemplate),
            license_template: cdktf.stringToTerraform(this._licenseTemplate),
            merge_commit_message: cdktf.stringToTerraform(this._mergeCommitMessage),
            merge_commit_title: cdktf.stringToTerraform(this._mergeCommitTitle),
            name: cdktf.stringToTerraform(this._name),
            private: cdktf.booleanToTerraform(this._private),
            source_owner: cdktf.stringToTerraform(this._sourceOwner),
            source_repo: cdktf.stringToTerraform(this._sourceRepo),
            squash_merge_commit_message: cdktf.stringToTerraform(this._squashMergeCommitMessage),
            squash_merge_commit_title: cdktf.stringToTerraform(this._squashMergeCommitTitle),
            topics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topics),
            visibility: cdktf.stringToTerraform(this._visibility),
            vulnerability_alerts: cdktf.booleanToTerraform(this._vulnerabilityAlerts),
            web_commit_signoff_required: cdktf.booleanToTerraform(this._webCommitSignoffRequired),
            pages: repositoryPagesToTerraform(this._pages.internalValue),
            security_and_analysis: repositorySecurityAndAnalysisToTerraform(this._securityAndAnalysis.internalValue),
            template: repositoryTemplateToTerraform(this._template.internalValue),
        };
    };
    Repository.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            allow_auto_merge: {
                value: cdktf.booleanToHclTerraform(this._allowAutoMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_forking: {
                value: cdktf.booleanToHclTerraform(this._allowForking),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_merge_commit: {
                value: cdktf.booleanToHclTerraform(this._allowMergeCommit),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_rebase_merge: {
                value: cdktf.booleanToHclTerraform(this._allowRebaseMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_squash_merge: {
                value: cdktf.booleanToHclTerraform(this._allowSquashMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            allow_update_branch: {
                value: cdktf.booleanToHclTerraform(this._allowUpdateBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            archive_on_destroy: {
                value: cdktf.booleanToHclTerraform(this._archiveOnDestroy),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            archived: {
                value: cdktf.booleanToHclTerraform(this._archived),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_init: {
                value: cdktf.booleanToHclTerraform(this._autoInit),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            default_branch: {
                value: cdktf.stringToHclTerraform(this._defaultBranch),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delete_branch_on_merge: {
                value: cdktf.booleanToHclTerraform(this._deleteBranchOnMerge),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            etag: {
                value: cdktf.stringToHclTerraform(this._etag),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            fork: {
                value: cdktf.stringToHclTerraform(this._fork),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gitignore_template: {
                value: cdktf.stringToHclTerraform(this._gitignoreTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            has_discussions: {
                value: cdktf.booleanToHclTerraform(this._hasDiscussions),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_downloads: {
                value: cdktf.booleanToHclTerraform(this._hasDownloads),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_issues: {
                value: cdktf.booleanToHclTerraform(this._hasIssues),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_projects: {
                value: cdktf.booleanToHclTerraform(this._hasProjects),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            has_wiki: {
                value: cdktf.booleanToHclTerraform(this._hasWiki),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            homepage_url: {
                value: cdktf.stringToHclTerraform(this._homepageUrl),
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
            ignore_vulnerability_alerts_during_read: {
                value: cdktf.booleanToHclTerraform(this._ignoreVulnerabilityAlertsDuringRead),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_template: {
                value: cdktf.booleanToHclTerraform(this._isTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            license_template: {
                value: cdktf.stringToHclTerraform(this._licenseTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            merge_commit_message: {
                value: cdktf.stringToHclTerraform(this._mergeCommitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            merge_commit_title: {
                value: cdktf.stringToHclTerraform(this._mergeCommitTitle),
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
            private: {
                value: cdktf.booleanToHclTerraform(this._private),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            source_owner: {
                value: cdktf.stringToHclTerraform(this._sourceOwner),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_repo: {
                value: cdktf.stringToHclTerraform(this._sourceRepo),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            squash_merge_commit_message: {
                value: cdktf.stringToHclTerraform(this._squashMergeCommitMessage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            squash_merge_commit_title: {
                value: cdktf.stringToHclTerraform(this._squashMergeCommitTitle),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            topics: {
                value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topics),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            visibility: {
                value: cdktf.stringToHclTerraform(this._visibility),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vulnerability_alerts: {
                value: cdktf.booleanToHclTerraform(this._vulnerabilityAlerts),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            web_commit_signoff_required: {
                value: cdktf.booleanToHclTerraform(this._webCommitSignoffRequired),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            pages: {
                value: repositoryPagesToHclTerraform(this._pages.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryPagesList",
            },
            security_and_analysis: {
                value: repositorySecurityAndAnalysisToHclTerraform(this._securityAndAnalysis.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositorySecurityAndAnalysisList",
            },
            template: {
                value: repositoryTemplateToHclTerraform(this._template.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "RepositoryTemplateList",
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
    Repository.tfResourceType = "github_repository";
    return Repository;
}(cdktf.TerraformResource));
exports.Repository = Repository;
