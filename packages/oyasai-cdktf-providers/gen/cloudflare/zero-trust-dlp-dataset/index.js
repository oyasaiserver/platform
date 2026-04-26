"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset
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
exports.ZeroTrustDlpDataset = exports.ZeroTrustDlpDatasetUploadsList = exports.ZeroTrustDlpDatasetUploadsOutputReference = exports.ZeroTrustDlpDatasetDatasetOutputReference = exports.ZeroTrustDlpDatasetDatasetUploadsList = exports.ZeroTrustDlpDatasetDatasetUploadsOutputReference = exports.ZeroTrustDlpDatasetDatasetColumnsList = exports.ZeroTrustDlpDatasetDatasetColumnsOutputReference = exports.ZeroTrustDlpDatasetColumnsList = exports.ZeroTrustDlpDatasetColumnsOutputReference = void 0;
exports.zeroTrustDlpDatasetColumnsToTerraform = zeroTrustDlpDatasetColumnsToTerraform;
exports.zeroTrustDlpDatasetColumnsToHclTerraform = zeroTrustDlpDatasetColumnsToHclTerraform;
exports.zeroTrustDlpDatasetDatasetColumnsToTerraform = zeroTrustDlpDatasetDatasetColumnsToTerraform;
exports.zeroTrustDlpDatasetDatasetColumnsToHclTerraform = zeroTrustDlpDatasetDatasetColumnsToHclTerraform;
exports.zeroTrustDlpDatasetDatasetUploadsToTerraform = zeroTrustDlpDatasetDatasetUploadsToTerraform;
exports.zeroTrustDlpDatasetDatasetUploadsToHclTerraform = zeroTrustDlpDatasetDatasetUploadsToHclTerraform;
exports.zeroTrustDlpDatasetDatasetToTerraform = zeroTrustDlpDatasetDatasetToTerraform;
exports.zeroTrustDlpDatasetDatasetToHclTerraform = zeroTrustDlpDatasetDatasetToHclTerraform;
exports.zeroTrustDlpDatasetUploadsToTerraform = zeroTrustDlpDatasetUploadsToTerraform;
exports.zeroTrustDlpDatasetUploadsToHclTerraform = zeroTrustDlpDatasetUploadsToHclTerraform;
var cdktf = require("cdktf");
function zeroTrustDlpDatasetColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpDatasetColumnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpDatasetColumnsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetColumnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetColumnsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpDatasetColumnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpDatasetColumnsOutputReference.prototype, "entryId", {
        // entry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetColumnsOutputReference.prototype, "headerName", {
        // header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetColumnsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetColumnsOutputReference.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpDatasetColumnsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpDatasetColumnsOutputReference = ZeroTrustDlpDatasetColumnsOutputReference;
var ZeroTrustDlpDatasetColumnsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetColumnsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetColumnsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpDatasetColumnsList.prototype.get = function (index) {
        return new ZeroTrustDlpDatasetColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpDatasetColumnsList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpDatasetColumnsList = ZeroTrustDlpDatasetColumnsList;
function zeroTrustDlpDatasetDatasetColumnsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpDatasetDatasetColumnsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpDatasetDatasetColumnsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetDatasetColumnsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetDatasetColumnsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpDatasetDatasetColumnsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpDatasetDatasetColumnsOutputReference.prototype, "entryId", {
        // entry_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('entry_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetColumnsOutputReference.prototype, "headerName", {
        // header_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('header_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetColumnsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetColumnsOutputReference.prototype, "uploadStatus", {
        // upload_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('upload_status');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpDatasetDatasetColumnsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpDatasetDatasetColumnsOutputReference = ZeroTrustDlpDatasetDatasetColumnsOutputReference;
var ZeroTrustDlpDatasetDatasetColumnsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetDatasetColumnsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetDatasetColumnsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpDatasetDatasetColumnsList.prototype.get = function (index) {
        return new ZeroTrustDlpDatasetDatasetColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpDatasetDatasetColumnsList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpDatasetDatasetColumnsList = ZeroTrustDlpDatasetDatasetColumnsList;
function zeroTrustDlpDatasetDatasetUploadsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpDatasetDatasetUploadsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpDatasetDatasetUploadsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetDatasetUploadsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetDatasetUploadsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpDatasetDatasetUploadsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpDatasetDatasetUploadsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetUploadsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetUploadsOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpDatasetDatasetUploadsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpDatasetDatasetUploadsOutputReference = ZeroTrustDlpDatasetDatasetUploadsOutputReference;
var ZeroTrustDlpDatasetDatasetUploadsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetDatasetUploadsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetDatasetUploadsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpDatasetDatasetUploadsList.prototype.get = function (index) {
        return new ZeroTrustDlpDatasetDatasetUploadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpDatasetDatasetUploadsList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpDatasetDatasetUploadsList = ZeroTrustDlpDatasetDatasetUploadsList;
function zeroTrustDlpDatasetDatasetToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpDatasetDatasetToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpDatasetDatasetOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetDatasetOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ZeroTrustDlpDatasetDatasetOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // columns - computed: true, optional: false, required: false
        _this._columns = new ZeroTrustDlpDatasetDatasetColumnsList(_this, "columns", false);
        // uploads - computed: true, optional: false, required: false
        _this._uploads = new ZeroTrustDlpDatasetDatasetUploadsList(_this, "uploads", false);
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "caseSensitive", {
        // case_sensitive - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "encodingVersion", {
        // encoding_version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('encoding_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "secret", {
        // secret - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetDatasetOutputReference.prototype, "uploads", {
        get: function () {
            return this._uploads;
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpDatasetDatasetOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpDatasetDatasetOutputReference = ZeroTrustDlpDatasetDatasetOutputReference;
function zeroTrustDlpDatasetUploadsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function zeroTrustDlpDatasetUploadsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ZeroTrustDlpDatasetUploadsOutputReference = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetUploadsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetUploadsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ZeroTrustDlpDatasetUploadsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ZeroTrustDlpDatasetUploadsOutputReference.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetUploadsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDatasetUploadsOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    return ZeroTrustDlpDatasetUploadsOutputReference;
}(cdktf.ComplexObject));
exports.ZeroTrustDlpDatasetUploadsOutputReference = ZeroTrustDlpDatasetUploadsOutputReference;
var ZeroTrustDlpDatasetUploadsList = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDatasetUploadsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function ZeroTrustDlpDatasetUploadsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    ZeroTrustDlpDatasetUploadsList.prototype.get = function (index) {
        return new ZeroTrustDlpDatasetUploadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return ZeroTrustDlpDatasetUploadsList;
}(cdktf.ComplexList));
exports.ZeroTrustDlpDatasetUploadsList = ZeroTrustDlpDatasetUploadsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset}
*/
var ZeroTrustDlpDataset = /** @class */ (function (_super) {
    __extends(ZeroTrustDlpDataset, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset cloudflare_zero_trust_dlp_dataset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ZeroTrustDlpDatasetConfig
    */
    function ZeroTrustDlpDataset(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_dlp_dataset',
            terraformGeneratorMetadata: {
                providerName: 'cloudflare',
                providerVersion: '5.19.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        }) || this;
        // columns - computed: true, optional: false, required: false
        _this._columns = new ZeroTrustDlpDatasetColumnsList(_this, "columns", false);
        // dataset - computed: true, optional: false, required: false
        _this._dataset = new ZeroTrustDlpDatasetDatasetOutputReference(_this, "dataset");
        // uploads - computed: true, optional: false, required: false
        _this._uploads = new ZeroTrustDlpDatasetUploadsList(_this, "uploads", false);
        _this._accountId = config.accountId;
        _this._caseSensitive = config.caseSensitive;
        _this._datasetId = config.datasetId;
        _this._description = config.description;
        _this._encodingVersion = config.encodingVersion;
        _this._name = config.name;
        _this._secret = config.secret;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ZeroTrustDlpDataset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ZeroTrustDlpDataset to import
    * @param importFromId The id of the existing ZeroTrustDlpDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/zero_trust_dlp_dataset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ZeroTrustDlpDataset to import is found
    */
    ZeroTrustDlpDataset.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_dlp_dataset", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpDataset.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "caseSensitive", {
        get: function () {
            return this.getBooleanAttribute('case_sensitive');
        },
        set: function (value) {
            this._caseSensitive = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpDataset.prototype.resetCaseSensitive = function () {
        this._caseSensitive = undefined;
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "caseSensitiveInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._caseSensitive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "dataset", {
        get: function () {
            return this._dataset;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "datasetId", {
        get: function () {
            return this.getStringAttribute('dataset_id');
        },
        set: function (value) {
            this._datasetId = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpDataset.prototype.resetDatasetId = function () {
        this._datasetId = undefined;
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "datasetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._datasetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpDataset.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "encodingVersion", {
        get: function () {
            return this.getNumberAttribute('encoding_version');
        },
        set: function (value) {
            this._encodingVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpDataset.prototype.resetEncodingVersion = function () {
        this._encodingVersion = undefined;
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "encodingVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encodingVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "maxCells", {
        // max_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('max_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "numCells", {
        // num_cells - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('num_cells');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "secret", {
        get: function () {
            return this.getBooleanAttribute('secret');
        },
        set: function (value) {
            this._secret = value;
        },
        enumerable: false,
        configurable: true
    });
    ZeroTrustDlpDataset.prototype.resetSecret = function () {
        this._secret = undefined;
    };
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "secretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "updatedAt", {
        // updated_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('updated_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "uploads", {
        get: function () {
            return this._uploads;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ZeroTrustDlpDataset.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ZeroTrustDlpDataset.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            case_sensitive: cdktf.booleanToTerraform(this._caseSensitive),
            dataset_id: cdktf.stringToTerraform(this._datasetId),
            description: cdktf.stringToTerraform(this._description),
            encoding_version: cdktf.numberToTerraform(this._encodingVersion),
            name: cdktf.stringToTerraform(this._name),
            secret: cdktf.booleanToTerraform(this._secret),
        };
    };
    ZeroTrustDlpDataset.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            case_sensitive: {
                value: cdktf.booleanToHclTerraform(this._caseSensitive),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            dataset_id: {
                value: cdktf.stringToHclTerraform(this._datasetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktf.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encoding_version: {
                value: cdktf.numberToHclTerraform(this._encodingVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            name: {
                value: cdktf.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            secret: {
                value: cdktf.booleanToHclTerraform(this._secret),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ZeroTrustDlpDataset.tfResourceType = "cloudflare_zero_trust_dlp_dataset";
    return ZeroTrustDlpDataset;
}(cdktf.TerraformResource));
exports.ZeroTrustDlpDataset = ZeroTrustDlpDataset;
