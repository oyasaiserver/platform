"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record
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
exports.DataCloudflareDnsRecord = exports.DataCloudflareDnsRecordSettingsOutputReference = exports.DataCloudflareDnsRecordFilterOutputReference = exports.DataCloudflareDnsRecordFilterTagOutputReference = exports.DataCloudflareDnsRecordFilterNameOutputReference = exports.DataCloudflareDnsRecordFilterContentOutputReference = exports.DataCloudflareDnsRecordFilterCommentOutputReference = exports.DataCloudflareDnsRecordDataOutputReference = void 0;
exports.dataCloudflareDnsRecordDataToTerraform = dataCloudflareDnsRecordDataToTerraform;
exports.dataCloudflareDnsRecordDataToHclTerraform = dataCloudflareDnsRecordDataToHclTerraform;
exports.dataCloudflareDnsRecordFilterCommentToTerraform = dataCloudflareDnsRecordFilterCommentToTerraform;
exports.dataCloudflareDnsRecordFilterCommentToHclTerraform = dataCloudflareDnsRecordFilterCommentToHclTerraform;
exports.dataCloudflareDnsRecordFilterContentToTerraform = dataCloudflareDnsRecordFilterContentToTerraform;
exports.dataCloudflareDnsRecordFilterContentToHclTerraform = dataCloudflareDnsRecordFilterContentToHclTerraform;
exports.dataCloudflareDnsRecordFilterNameToTerraform = dataCloudflareDnsRecordFilterNameToTerraform;
exports.dataCloudflareDnsRecordFilterNameToHclTerraform = dataCloudflareDnsRecordFilterNameToHclTerraform;
exports.dataCloudflareDnsRecordFilterTagToTerraform = dataCloudflareDnsRecordFilterTagToTerraform;
exports.dataCloudflareDnsRecordFilterTagToHclTerraform = dataCloudflareDnsRecordFilterTagToHclTerraform;
exports.dataCloudflareDnsRecordFilterToTerraform = dataCloudflareDnsRecordFilterToTerraform;
exports.dataCloudflareDnsRecordFilterToHclTerraform = dataCloudflareDnsRecordFilterToHclTerraform;
exports.dataCloudflareDnsRecordSettingsToTerraform = dataCloudflareDnsRecordSettingsToTerraform;
exports.dataCloudflareDnsRecordSettingsToHclTerraform = dataCloudflareDnsRecordSettingsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareDnsRecordDataToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsRecordDataToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsRecordDataOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordDataOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordDataOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // flags - computed: true, optional: false, required: false
        _this._flags = new cdktf.AnyMap(_this, "flags");
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "algorithm", {
        // algorithm - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('algorithm');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "altitude", {
        // altitude - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('altitude');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "certificate", {
        // certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "digest", {
        // digest - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('digest');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "digestType", {
        // digest_type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('digest_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "fingerprint", {
        // fingerprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('fingerprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "flags", {
        get: function () {
            return this._flags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "keyTag", {
        // key_tag - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('key_tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "latDegrees", {
        // lat_degrees - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lat_degrees');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "latDirection", {
        // lat_direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lat_direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "latMinutes", {
        // lat_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lat_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "latSeconds", {
        // lat_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lat_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "longDegrees", {
        // long_degrees - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('long_degrees');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "longDirection", {
        // long_direction - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('long_direction');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "longMinutes", {
        // long_minutes - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('long_minutes');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "longSeconds", {
        // long_seconds - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('long_seconds');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "matchingType", {
        // matching_type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('matching_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "order", {
        // order - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('order');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "port", {
        // port - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('port');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "precisionHorz", {
        // precision_horz - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precision_horz');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "precisionVert", {
        // precision_vert - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('precision_vert');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "preference", {
        // preference - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('preference');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "protocol", {
        // protocol - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('protocol');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "publicKey", {
        // public_key - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "regex", {
        // regex - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('regex');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "replacement", {
        // replacement - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('replacement');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "selector", {
        // selector - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('selector');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "size", {
        // size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "tag", {
        // tag - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tag');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "target", {
        // target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "usage", {
        // usage - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordDataOutputReference.prototype, "weight", {
        // weight - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('weight');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordDataOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordDataOutputReference = DataCloudflareDnsRecordDataOutputReference;
function dataCloudflareDnsRecordFilterCommentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        absent: cdktf.stringToTerraform(struct.absent),
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        present: cdktf.stringToTerraform(struct.present),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordFilterCommentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        absent: {
            value: cdktf.stringToHclTerraform(struct.absent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        present: {
            value: cdktf.stringToHclTerraform(struct.present),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordFilterCommentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordFilterCommentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordFilterCommentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._absent !== undefined) {
                hasAnyValues = true;
                internalValueResult.absent = this._absent;
            }
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._present !== undefined) {
                hasAnyValues = true;
                internalValueResult.present = this._present;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._absent = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._present = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._absent = value.absent;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._present = value.present;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "absent", {
        get: function () {
            return this.getStringAttribute('absent');
        },
        set: function (value) {
            this._absent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterCommentOutputReference.prototype.resetAbsent = function () {
        this._absent = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "absentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._absent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterCommentOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterCommentOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterCommentOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "present", {
        get: function () {
            return this.getStringAttribute('present');
        },
        set: function (value) {
            this._present = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterCommentOutputReference.prototype.resetPresent = function () {
        this._present = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "presentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._present;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterCommentOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterCommentOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordFilterCommentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordFilterCommentOutputReference = DataCloudflareDnsRecordFilterCommentOutputReference;
function dataCloudflareDnsRecordFilterContentToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordFilterContentToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordFilterContentOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordFilterContentOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordFilterContentOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterContentOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterContentOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterContentOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterContentOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterContentOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordFilterContentOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordFilterContentOutputReference = DataCloudflareDnsRecordFilterContentOutputReference;
function dataCloudflareDnsRecordFilterNameToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordFilterNameToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordFilterNameOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordFilterNameOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordFilterNameOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterNameOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterNameOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterNameOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterNameOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterNameOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordFilterNameOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordFilterNameOutputReference = DataCloudflareDnsRecordFilterNameOutputReference;
function dataCloudflareDnsRecordFilterTagToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        absent: cdktf.stringToTerraform(struct.absent),
        contains: cdktf.stringToTerraform(struct.contains),
        endswith: cdktf.stringToTerraform(struct.endswith),
        exact: cdktf.stringToTerraform(struct.exact),
        present: cdktf.stringToTerraform(struct.present),
        startswith: cdktf.stringToTerraform(struct.startswith),
    };
}
function dataCloudflareDnsRecordFilterTagToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        absent: {
            value: cdktf.stringToHclTerraform(struct.absent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        contains: {
            value: cdktf.stringToHclTerraform(struct.contains),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endswith: {
            value: cdktf.stringToHclTerraform(struct.endswith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exact: {
            value: cdktf.stringToHclTerraform(struct.exact),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        present: {
            value: cdktf.stringToHclTerraform(struct.present),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        startswith: {
            value: cdktf.stringToHclTerraform(struct.startswith),
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
var DataCloudflareDnsRecordFilterTagOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordFilterTagOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordFilterTagOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._absent !== undefined) {
                hasAnyValues = true;
                internalValueResult.absent = this._absent;
            }
            if (this._contains !== undefined) {
                hasAnyValues = true;
                internalValueResult.contains = this._contains;
            }
            if (this._endswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.endswith = this._endswith;
            }
            if (this._exact !== undefined) {
                hasAnyValues = true;
                internalValueResult.exact = this._exact;
            }
            if (this._present !== undefined) {
                hasAnyValues = true;
                internalValueResult.present = this._present;
            }
            if (this._startswith !== undefined) {
                hasAnyValues = true;
                internalValueResult.startswith = this._startswith;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._absent = undefined;
                this._contains = undefined;
                this._endswith = undefined;
                this._exact = undefined;
                this._present = undefined;
                this._startswith = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._absent = value.absent;
                this._contains = value.contains;
                this._endswith = value.endswith;
                this._exact = value.exact;
                this._present = value.present;
                this._startswith = value.startswith;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "absent", {
        get: function () {
            return this.getStringAttribute('absent');
        },
        set: function (value) {
            this._absent = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterTagOutputReference.prototype.resetAbsent = function () {
        this._absent = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "absentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._absent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "contains", {
        get: function () {
            return this.getStringAttribute('contains');
        },
        set: function (value) {
            this._contains = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterTagOutputReference.prototype.resetContains = function () {
        this._contains = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "containsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contains;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "endswith", {
        get: function () {
            return this.getStringAttribute('endswith');
        },
        set: function (value) {
            this._endswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterTagOutputReference.prototype.resetEndswith = function () {
        this._endswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "endswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endswith;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "exact", {
        get: function () {
            return this.getStringAttribute('exact');
        },
        set: function (value) {
            this._exact = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterTagOutputReference.prototype.resetExact = function () {
        this._exact = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "exactInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._exact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "present", {
        get: function () {
            return this.getStringAttribute('present');
        },
        set: function (value) {
            this._present = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterTagOutputReference.prototype.resetPresent = function () {
        this._present = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "presentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._present;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "startswith", {
        get: function () {
            return this.getStringAttribute('startswith');
        },
        set: function (value) {
            this._startswith = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterTagOutputReference.prototype.resetStartswith = function () {
        this._startswith = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterTagOutputReference.prototype, "startswithInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._startswith;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordFilterTagOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordFilterTagOutputReference = DataCloudflareDnsRecordFilterTagOutputReference;
function dataCloudflareDnsRecordFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comment: dataCloudflareDnsRecordFilterCommentToTerraform(struct.comment),
        content: dataCloudflareDnsRecordFilterContentToTerraform(struct.content),
        direction: cdktf.stringToTerraform(struct.direction),
        match: cdktf.stringToTerraform(struct.match),
        name: dataCloudflareDnsRecordFilterNameToTerraform(struct.name),
        order: cdktf.stringToTerraform(struct.order),
        proxied: cdktf.booleanToTerraform(struct.proxied),
        search: cdktf.stringToTerraform(struct.search),
        tag: dataCloudflareDnsRecordFilterTagToTerraform(struct.tag),
        tag_match: cdktf.stringToTerraform(struct.tagMatch),
        type: cdktf.stringToTerraform(struct.type),
    };
}
function dataCloudflareDnsRecordFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        comment: {
            value: dataCloudflareDnsRecordFilterCommentToHclTerraform(struct.comment),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterComment",
        },
        content: {
            value: dataCloudflareDnsRecordFilterContentToHclTerraform(struct.content),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterContent",
        },
        direction: {
            value: cdktf.stringToHclTerraform(struct.direction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        match: {
            value: cdktf.stringToHclTerraform(struct.match),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: dataCloudflareDnsRecordFilterNameToHclTerraform(struct.name),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterName",
        },
        order: {
            value: cdktf.stringToHclTerraform(struct.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        proxied: {
            value: cdktf.booleanToHclTerraform(struct.proxied),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        search: {
            value: cdktf.stringToHclTerraform(struct.search),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag: {
            value: dataCloudflareDnsRecordFilterTagToHclTerraform(struct.tag),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCloudflareDnsRecordFilterTag",
        },
        tag_match: {
            value: cdktf.stringToHclTerraform(struct.tagMatch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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
var DataCloudflareDnsRecordFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // comment - computed: false, optional: true, required: false
        _this._comment = new DataCloudflareDnsRecordFilterCommentOutputReference(_this, "comment");
        // content - computed: false, optional: true, required: false
        _this._content = new DataCloudflareDnsRecordFilterContentOutputReference(_this, "content");
        // name - computed: false, optional: true, required: false
        _this._name = new DataCloudflareDnsRecordFilterNameOutputReference(_this, "name");
        // tag - computed: false, optional: true, required: false
        _this._tag = new DataCloudflareDnsRecordFilterTagOutputReference(_this, "tag");
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "internalValue", {
        get: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (((_a = this._comment) === null || _a === void 0 ? void 0 : _a.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.comment = (_b = this._comment) === null || _b === void 0 ? void 0 : _b.internalValue;
            }
            if (((_c = this._content) === null || _c === void 0 ? void 0 : _c.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.content = (_d = this._content) === null || _d === void 0 ? void 0 : _d.internalValue;
            }
            if (this._direction !== undefined) {
                hasAnyValues = true;
                internalValueResult.direction = this._direction;
            }
            if (this._match !== undefined) {
                hasAnyValues = true;
                internalValueResult.match = this._match;
            }
            if (((_e = this._name) === null || _e === void 0 ? void 0 : _e.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.name = (_f = this._name) === null || _f === void 0 ? void 0 : _f.internalValue;
            }
            if (this._order !== undefined) {
                hasAnyValues = true;
                internalValueResult.order = this._order;
            }
            if (this._proxied !== undefined) {
                hasAnyValues = true;
                internalValueResult.proxied = this._proxied;
            }
            if (this._search !== undefined) {
                hasAnyValues = true;
                internalValueResult.search = this._search;
            }
            if (((_g = this._tag) === null || _g === void 0 ? void 0 : _g.internalValue) !== undefined) {
                hasAnyValues = true;
                internalValueResult.tag = (_h = this._tag) === null || _h === void 0 ? void 0 : _h.internalValue;
            }
            if (this._tagMatch !== undefined) {
                hasAnyValues = true;
                internalValueResult.tagMatch = this._tagMatch;
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
                this.resolvableValue = undefined;
                this._comment.internalValue = undefined;
                this._content.internalValue = undefined;
                this._direction = undefined;
                this._match = undefined;
                this._name.internalValue = undefined;
                this._order = undefined;
                this._proxied = undefined;
                this._search = undefined;
                this._tag.internalValue = undefined;
                this._tagMatch = undefined;
                this._type = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._comment.internalValue = value.comment;
                this._content.internalValue = value.content;
                this._direction = value.direction;
                this._match = value.match;
                this._name.internalValue = value.name;
                this._order = value.order;
                this._proxied = value.proxied;
                this._search = value.search;
                this._tag.internalValue = value.tag;
                this._tagMatch = value.tagMatch;
                this._type = value.type;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.putComment = function (value) {
        this._comment.internalValue = value;
    };
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetComment = function () {
        this._comment.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "commentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._comment.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.putContent = function (value) {
        this._content.internalValue = value;
    };
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetContent = function () {
        this._content.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "contentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._content.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "direction", {
        get: function () {
            return this.getStringAttribute('direction');
        },
        set: function (value) {
            this._direction = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetDirection = function () {
        this._direction = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "directionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._direction;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "match", {
        get: function () {
            return this.getStringAttribute('match');
        },
        set: function (value) {
            this._match = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetMatch = function () {
        this._match = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "matchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.putName = function (value) {
        this._name.internalValue = value;
    };
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetName = function () {
        this._name.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "order", {
        get: function () {
            return this.getStringAttribute('order');
        },
        set: function (value) {
            this._order = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetOrder = function () {
        this._order = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "orderInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "proxied", {
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        set: function (value) {
            this._proxied = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetProxied = function () {
        this._proxied = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "proxiedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._proxied;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "search", {
        get: function () {
            return this.getStringAttribute('search');
        },
        set: function (value) {
            this._search = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetSearch = function () {
        this._search = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "searchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._search;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "tag", {
        get: function () {
            return this._tag;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.putTag = function (value) {
        this._tag.internalValue = value;
    };
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetTag = function () {
        this._tag.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "tagInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tag.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "tagMatch", {
        get: function () {
            return this.getStringAttribute('tag_match');
        },
        set: function (value) {
            this._tagMatch = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetTagMatch = function () {
        this._tagMatch = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "tagMatchInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagMatch;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecordFilterOutputReference.prototype.resetType = function () {
        this._type = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecordFilterOutputReference.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordFilterOutputReference = DataCloudflareDnsRecordFilterOutputReference;
function dataCloudflareDnsRecordSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareDnsRecordSettingsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareDnsRecordSettingsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecordSettingsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareDnsRecordSettingsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareDnsRecordSettingsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareDnsRecordSettingsOutputReference.prototype, "flattenCname", {
        // flatten_cname - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('flatten_cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordSettingsOutputReference.prototype, "ipv4Only", {
        // ipv4_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ipv4_only');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecordSettingsOutputReference.prototype, "ipv6Only", {
        // ipv6_only - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('ipv6_only');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareDnsRecordSettingsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareDnsRecordSettingsOutputReference = DataCloudflareDnsRecordSettingsOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record cloudflare_dns_record}
*/
var DataCloudflareDnsRecord = /** @class */ (function (_super) {
    __extends(DataCloudflareDnsRecord, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record cloudflare_dns_record} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareDnsRecordConfig = {}
    */
    function DataCloudflareDnsRecord(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_dns_record',
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
        // data - computed: true, optional: false, required: false
        _this._data = new DataCloudflareDnsRecordDataOutputReference(_this, "data");
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareDnsRecordFilterOutputReference(_this, "filter");
        // settings - computed: true, optional: false, required: false
        _this._settings = new DataCloudflareDnsRecordSettingsOutputReference(_this, "settings");
        _this._dnsRecordId = config.dnsRecordId;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareDnsRecord resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareDnsRecord to import
    * @param importFromId The id of the existing DataCloudflareDnsRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/dns_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareDnsRecord to import is found
    */
    DataCloudflareDnsRecord.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_dns_record", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "comment", {
        // ==========
        // ATTRIBUTES
        // ==========
        // comment - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "commentModifiedOn", {
        // comment_modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('comment_modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "content", {
        // content - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "createdOn", {
        // created_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "dnsRecordId", {
        get: function () {
            return this.getStringAttribute('dns_record_id');
        },
        set: function (value) {
            this._dnsRecordId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecord.prototype.resetDnsRecordId = function () {
        this._dnsRecordId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "dnsRecordIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsRecordId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecord.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareDnsRecord.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "meta", {
        // meta - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('meta');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "privateRouting", {
        // private_routing - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('private_routing');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "proxiable", {
        // proxiable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxiable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "proxied", {
        // proxied - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('proxied');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "settings", {
        get: function () {
            return this._settings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "tags", {
        // tags - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('tags'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "tagsModifiedOn", {
        // tags_modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('tags_modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "ttl", {
        // ttl - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareDnsRecord.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareDnsRecord.prototype, "zoneIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._zoneId;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareDnsRecord.prototype.synthesizeAttributes = function () {
        return {
            dns_record_id: cdktf.stringToTerraform(this._dnsRecordId),
            filter: dataCloudflareDnsRecordFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareDnsRecord.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            dns_record_id: {
                value: cdktf.stringToHclTerraform(this._dnsRecordId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareDnsRecordFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareDnsRecordFilter",
            },
            zone_id: {
                value: cdktf.stringToHclTerraform(this._zoneId),
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
    DataCloudflareDnsRecord.tfResourceType = "cloudflare_dns_record";
    return DataCloudflareDnsRecord;
}(cdktf.TerraformDataSource));
exports.DataCloudflareDnsRecord = DataCloudflareDnsRecord;
