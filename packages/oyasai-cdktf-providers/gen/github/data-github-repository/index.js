"use strict";
// https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository
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
exports.DataGithubRepository = exports.DataGithubRepositoryTemplateList = exports.DataGithubRepositoryTemplateOutputReference = exports.DataGithubRepositoryRepositoryLicenseList = exports.DataGithubRepositoryRepositoryLicenseOutputReference = exports.DataGithubRepositoryRepositoryLicenseLicenseList = exports.DataGithubRepositoryRepositoryLicenseLicenseOutputReference = exports.DataGithubRepositoryPagesList = exports.DataGithubRepositoryPagesOutputReference = exports.DataGithubRepositoryPagesSourceList = exports.DataGithubRepositoryPagesSourceOutputReference = void 0;
exports.dataGithubRepositoryPagesSourceToTerraform = dataGithubRepositoryPagesSourceToTerraform;
exports.dataGithubRepositoryPagesSourceToHclTerraform = dataGithubRepositoryPagesSourceToHclTerraform;
exports.dataGithubRepositoryPagesToTerraform = dataGithubRepositoryPagesToTerraform;
exports.dataGithubRepositoryPagesToHclTerraform = dataGithubRepositoryPagesToHclTerraform;
exports.dataGithubRepositoryRepositoryLicenseLicenseToTerraform = dataGithubRepositoryRepositoryLicenseLicenseToTerraform;
exports.dataGithubRepositoryRepositoryLicenseLicenseToHclTerraform = dataGithubRepositoryRepositoryLicenseLicenseToHclTerraform;
exports.dataGithubRepositoryRepositoryLicenseToTerraform = dataGithubRepositoryRepositoryLicenseToTerraform;
exports.dataGithubRepositoryRepositoryLicenseToHclTerraform = dataGithubRepositoryRepositoryLicenseToHclTerraform;
exports.dataGithubRepositoryTemplateToTerraform = dataGithubRepositoryTemplateToTerraform;
exports.dataGithubRepositoryTemplateToHclTerraform = dataGithubRepositoryTemplateToHclTerraform;
var cdktf = require("cdktf");
function dataGithubRepositoryPagesSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryPagesSourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryPagesSourceOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesSourceOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPagesSourceOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryPagesSourceOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesSourceOutputReference.prototype, "branch", {
        // branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesSourceOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryPagesSourceOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryPagesSourceOutputReference = DataGithubRepositoryPagesSourceOutputReference;
var DataGithubRepositoryPagesSourceList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesSourceList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPagesSourceList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryPagesSourceList.prototype.get = function (index) {
        return new DataGithubRepositoryPagesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryPagesSourceList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryPagesSourceList = DataGithubRepositoryPagesSourceList;
function dataGithubRepositoryPagesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryPagesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryPagesOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPagesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // source - computed: true, optional: false, required: false
        _this._source = new DataGithubRepositoryPagesSourceList(_this, "source", false);
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "buildType", {
        // build_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('build_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "custom404", {
        // custom_404 - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('custom_404');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryPagesOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryPagesOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryPagesOutputReference = DataGithubRepositoryPagesOutputReference;
var DataGithubRepositoryPagesList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryPagesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryPagesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryPagesList.prototype.get = function (index) {
        return new DataGithubRepositoryPagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryPagesList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryPagesList = DataGithubRepositoryPagesList;
function dataGithubRepositoryRepositoryLicenseLicenseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryRepositoryLicenseLicenseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryRepositoryLicenseLicenseOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryRepositoryLicenseLicenseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryRepositoryLicenseLicenseOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "body", {
        // body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "conditions", {
        // conditions - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('conditions'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "featured", {
        // featured - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('featured');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "implementation", {
        // implementation - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('implementation');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "key", {
        // key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "limitations", {
        // limitations - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('limitations'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "permissions", {
        // permissions - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('permissions'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "spdxId", {
        // spdx_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('spdx_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseLicenseOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryRepositoryLicenseLicenseOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryRepositoryLicenseLicenseOutputReference = DataGithubRepositoryRepositoryLicenseLicenseOutputReference;
var DataGithubRepositoryRepositoryLicenseLicenseList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryRepositoryLicenseLicenseList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryRepositoryLicenseLicenseList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryRepositoryLicenseLicenseList.prototype.get = function (index) {
        return new DataGithubRepositoryRepositoryLicenseLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryRepositoryLicenseLicenseList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryRepositoryLicenseLicenseList = DataGithubRepositoryRepositoryLicenseLicenseList;
function dataGithubRepositoryRepositoryLicenseToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryRepositoryLicenseToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryRepositoryLicenseOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryRepositoryLicenseOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryRepositoryLicenseOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // license - computed: true, optional: false, required: false
        _this._license = new DataGithubRepositoryRepositoryLicenseLicenseList(_this, "license", false);
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "downloadUrl", {
        // download_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('download_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "encoding", {
        // encoding - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('encoding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "gitUrl", {
        // git_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('git_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "license", {
        get: function () {
            return this._license;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "sha", {
        // sha - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryRepositoryLicenseOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryRepositoryLicenseOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryRepositoryLicenseOutputReference = DataGithubRepositoryRepositoryLicenseOutputReference;
var DataGithubRepositoryRepositoryLicenseList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryRepositoryLicenseList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryRepositoryLicenseList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryRepositoryLicenseList.prototype.get = function (index) {
        return new DataGithubRepositoryRepositoryLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryRepositoryLicenseList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryRepositoryLicenseList = DataGithubRepositoryRepositoryLicenseList;
function dataGithubRepositoryTemplateToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataGithubRepositoryTemplateToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataGithubRepositoryTemplateOutputReference = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryTemplateOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryTemplateOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataGithubRepositoryTemplateOutputReference.prototype, "internalValue", {
        get: function () {
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryTemplateOutputReference.prototype, "owner", {
        // owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepositoryTemplateOutputReference.prototype, "repository", {
        // repository - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('repository');
        },
        enumerable: false,
        configurable: true
    });
    return DataGithubRepositoryTemplateOutputReference;
}(cdktf.ComplexObject));
exports.DataGithubRepositoryTemplateOutputReference = DataGithubRepositoryTemplateOutputReference;
var DataGithubRepositoryTemplateList = /** @class */ (function (_super) {
    __extends(DataGithubRepositoryTemplateList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataGithubRepositoryTemplateList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataGithubRepositoryTemplateList.prototype.get = function (index) {
        return new DataGithubRepositoryTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataGithubRepositoryTemplateList;
}(cdktf.ComplexList));
exports.DataGithubRepositoryTemplateList = DataGithubRepositoryTemplateList;
/**
* Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository github_repository}
*/
var DataGithubRepository = /** @class */ (function (_super) {
    __extends(DataGithubRepository, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository github_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataGithubRepositoryConfig = {}
    */
    function DataGithubRepository(scope, id, config) {
        if (config === void 0) { config = {}; }
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
        // pages - computed: true, optional: false, required: false
        _this._pages = new DataGithubRepositoryPagesList(_this, "pages", false);
        // repository_license - computed: true, optional: false, required: false
        _this._repositoryLicense = new DataGithubRepositoryRepositoryLicenseList(_this, "repository_license", false);
        // template - computed: true, optional: false, required: false
        _this._template = new DataGithubRepositoryTemplateList(_this, "template", false);
        _this._description = config.description;
        _this._fullName = config.fullName;
        _this._homepageUrl = config.homepageUrl;
        _this._id = config.id;
        _this._name = config.name;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataGithubRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataGithubRepository to import
    * @param importFromId The id of the existing DataGithubRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.0/docs/data-sources/repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataGithubRepository to import is found
    */
    DataGithubRepository.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "github_repository", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataGithubRepository.prototype, "allowAutoMerge", {
        // ==========
        // ATTRIBUTES
        // ==========
        // allow_auto_merge - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_auto_merge');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "allowForking", {
        // allow_forking - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_forking');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "allowMergeCommit", {
        // allow_merge_commit - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_merge_commit');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "allowRebaseMerge", {
        // allow_rebase_merge - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_rebase_merge');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "allowSquashMerge", {
        // allow_squash_merge - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_squash_merge');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "allowUpdateBranch", {
        // allow_update_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('allow_update_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "archived", {
        // archived - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('archived');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "defaultBranch", {
        // default_branch - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_branch');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "deleteBranchOnMerge", {
        // delete_branch_on_merge - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('delete_branch_on_merge');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepository.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(DataGithubRepository.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "fork", {
        // fork - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('fork');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "fullName", {
        get: function () {
            return this.getStringAttribute('full_name');
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepository.prototype.resetFullName = function () {
        this._fullName = undefined;
    };
    Object.defineProperty(DataGithubRepository.prototype, "fullNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._fullName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "gitCloneUrl", {
        // git_clone_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('git_clone_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "hasDiscussions", {
        // has_discussions - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_discussions');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "hasDownloads", {
        // has_downloads - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_downloads');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "hasIssues", {
        // has_issues - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_issues');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "hasProjects", {
        // has_projects - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_projects');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "hasWiki", {
        // has_wiki - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_wiki');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "homepageUrl", {
        get: function () {
            return this.getStringAttribute('homepage_url');
        },
        set: function (value) {
            this._homepageUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepository.prototype.resetHomepageUrl = function () {
        this._homepageUrl = undefined;
    };
    Object.defineProperty(DataGithubRepository.prototype, "homepageUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._homepageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "htmlUrl", {
        // html_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('html_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "httpCloneUrl", {
        // http_clone_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_clone_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "id", {
        get: function () {
            return this.getStringAttribute('id');
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepository.prototype.resetId = function () {
        this._id = undefined;
    };
    Object.defineProperty(DataGithubRepository.prototype, "idInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "isTemplate", {
        // is_template - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_template');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "mergeCommitMessage", {
        // merge_commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('merge_commit_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "mergeCommitTitle", {
        // merge_commit_title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('merge_commit_title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataGithubRepository.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataGithubRepository.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "nodeId", {
        // node_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('node_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "primaryLanguage", {
        // primary_language - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_language');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "private", {
        // private - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('private');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "repoId", {
        // repo_id - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('repo_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "repositoryLicense", {
        get: function () {
            return this._repositoryLicense;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "squashMergeCommitMessage", {
        // squash_merge_commit_message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('squash_merge_commit_message');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "squashMergeCommitTitle", {
        // squash_merge_commit_title - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('squash_merge_commit_title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "sshCloneUrl", {
        // ssh_clone_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ssh_clone_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "svnUrl", {
        // svn_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('svn_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "template", {
        get: function () {
            return this._template;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "topics", {
        // topics - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('topics');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataGithubRepository.prototype, "visibility", {
        // visibility - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('visibility');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataGithubRepository.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            full_name: cdktf.stringToTerraform(this._fullName),
            homepage_url: cdktf.stringToTerraform(this._homepageUrl),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
        };
    };
    DataGithubRepository.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            full_name: {
                value: cdktf.stringToHclTerraform(this._fullName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
            name: {
                value: cdktf.stringToHclTerraform(this._name),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataGithubRepository.tfResourceType = "github_repository";
    return DataGithubRepository;
}(cdktf.TerraformDataSource));
exports.DataGithubRepository = DataGithubRepository;
