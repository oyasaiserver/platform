"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test
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
exports.ObservatoryScheduledTest = exports.ObservatoryScheduledTestTestOutputReference = exports.ObservatoryScheduledTestTestRegionOutputReference = exports.ObservatoryScheduledTestTestMobileReportOutputReference = exports.ObservatoryScheduledTestTestMobileReportErrorOutputReference = exports.ObservatoryScheduledTestTestDesktopReportOutputReference = exports.ObservatoryScheduledTestTestDesktopReportErrorOutputReference = exports.ObservatoryScheduledTestScheduleOutputReference = void 0;
exports.observatoryScheduledTestScheduleToTerraform = observatoryScheduledTestScheduleToTerraform;
exports.observatoryScheduledTestScheduleToHclTerraform = observatoryScheduledTestScheduleToHclTerraform;
exports.observatoryScheduledTestTestDesktopReportErrorToTerraform = observatoryScheduledTestTestDesktopReportErrorToTerraform;
exports.observatoryScheduledTestTestDesktopReportErrorToHclTerraform = observatoryScheduledTestTestDesktopReportErrorToHclTerraform;
exports.observatoryScheduledTestTestDesktopReportToTerraform = observatoryScheduledTestTestDesktopReportToTerraform;
exports.observatoryScheduledTestTestDesktopReportToHclTerraform = observatoryScheduledTestTestDesktopReportToHclTerraform;
exports.observatoryScheduledTestTestMobileReportErrorToTerraform = observatoryScheduledTestTestMobileReportErrorToTerraform;
exports.observatoryScheduledTestTestMobileReportErrorToHclTerraform = observatoryScheduledTestTestMobileReportErrorToHclTerraform;
exports.observatoryScheduledTestTestMobileReportToTerraform = observatoryScheduledTestTestMobileReportToTerraform;
exports.observatoryScheduledTestTestMobileReportToHclTerraform = observatoryScheduledTestTestMobileReportToHclTerraform;
exports.observatoryScheduledTestTestRegionToTerraform = observatoryScheduledTestTestRegionToTerraform;
exports.observatoryScheduledTestTestRegionToHclTerraform = observatoryScheduledTestTestRegionToHclTerraform;
exports.observatoryScheduledTestTestToTerraform = observatoryScheduledTestTestToTerraform;
exports.observatoryScheduledTestTestToHclTerraform = observatoryScheduledTestTestToHclTerraform;
var cdktf = require("cdktf");
function observatoryScheduledTestScheduleToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestScheduleToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestScheduleOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestScheduleOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestScheduleOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestScheduleOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestScheduleOutputReference.prototype, "frequency", {
        // frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestScheduleOutputReference.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestScheduleOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestScheduleOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestScheduleOutputReference = ObservatoryScheduledTestScheduleOutputReference;
function observatoryScheduledTestTestDesktopReportErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestTestDesktopReportErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestTestDesktopReportErrorOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestTestDesktopReportErrorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestTestDesktopReportErrorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportErrorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportErrorOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportErrorOutputReference.prototype, "detail", {
        // detail - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('detail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportErrorOutputReference.prototype, "finalDisplayedUrl", {
        // final_displayed_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('final_displayed_url');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestTestDesktopReportErrorOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestTestDesktopReportErrorOutputReference = ObservatoryScheduledTestTestDesktopReportErrorOutputReference;
function observatoryScheduledTestTestDesktopReportToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestTestDesktopReportToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestTestDesktopReportOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestTestDesktopReportOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestTestDesktopReportOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // error - computed: true, optional: false, required: false
        _this._error = new ObservatoryScheduledTestTestDesktopReportErrorOutputReference(_this, "error");
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "cls", {
        // cls - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "deviceType", {
        // device_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "fcp", {
        // fcp - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('fcp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "jsonReportUrl", {
        // json_report_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('json_report_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "lcp", {
        // lcp - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lcp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "performanceScore", {
        // performance_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('performance_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "si", {
        // si - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('si');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "tbt", {
        // tbt - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tbt');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "ttfb", {
        // ttfb - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttfb');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestDesktopReportOutputReference.prototype, "tti", {
        // tti - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tti');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestTestDesktopReportOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestTestDesktopReportOutputReference = ObservatoryScheduledTestTestDesktopReportOutputReference;
function observatoryScheduledTestTestMobileReportErrorToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestTestMobileReportErrorToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestTestMobileReportErrorOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestTestMobileReportErrorOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestTestMobileReportErrorOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportErrorOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportErrorOutputReference.prototype, "code", {
        // code - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('code');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportErrorOutputReference.prototype, "detail", {
        // detail - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('detail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportErrorOutputReference.prototype, "finalDisplayedUrl", {
        // final_displayed_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('final_displayed_url');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestTestMobileReportErrorOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestTestMobileReportErrorOutputReference = ObservatoryScheduledTestTestMobileReportErrorOutputReference;
function observatoryScheduledTestTestMobileReportToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestTestMobileReportToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestTestMobileReportOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestTestMobileReportOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestTestMobileReportOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // error - computed: true, optional: false, required: false
        _this._error = new ObservatoryScheduledTestTestMobileReportErrorOutputReference(_this, "error");
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "cls", {
        // cls - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "deviceType", {
        // device_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('device_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "error", {
        get: function () {
            return this._error;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "fcp", {
        // fcp - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('fcp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "jsonReportUrl", {
        // json_report_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('json_report_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "lcp", {
        // lcp - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('lcp');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "performanceScore", {
        // performance_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('performance_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "si", {
        // si - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('si');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "tbt", {
        // tbt - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tbt');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "ttfb", {
        // ttfb - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ttfb');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestMobileReportOutputReference.prototype, "tti", {
        // tti - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('tti');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestTestMobileReportOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestTestMobileReportOutputReference = ObservatoryScheduledTestTestMobileReportOutputReference;
function observatoryScheduledTestTestRegionToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestTestRegionToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestTestRegionOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestTestRegionOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestTestRegionOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestTestRegionOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestTestRegionOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestRegionOutputReference.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestTestRegionOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestTestRegionOutputReference = ObservatoryScheduledTestTestRegionOutputReference;
function observatoryScheduledTestTestToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function observatoryScheduledTestTestToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var ObservatoryScheduledTestTestOutputReference = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTestTestOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function ObservatoryScheduledTestTestOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // desktop_report - computed: true, optional: false, required: false
        _this._desktopReport = new ObservatoryScheduledTestTestDesktopReportOutputReference(_this, "desktop_report");
        // mobile_report - computed: true, optional: false, required: false
        _this._mobileReport = new ObservatoryScheduledTestTestMobileReportOutputReference(_this, "mobile_report");
        // region - computed: true, optional: false, required: false
        _this._region = new ObservatoryScheduledTestTestRegionOutputReference(_this, "region");
        return _this;
    }
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "date", {
        // date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "desktopReport", {
        get: function () {
            return this._desktopReport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "mobileReport", {
        get: function () {
            return this._mobileReport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "region", {
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "scheduleFrequency", {
        // schedule_frequency - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schedule_frequency');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTestTestOutputReference.prototype, "url", {
        // url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('url');
        },
        enumerable: false,
        configurable: true
    });
    return ObservatoryScheduledTestTestOutputReference;
}(cdktf.ComplexObject));
exports.ObservatoryScheduledTestTestOutputReference = ObservatoryScheduledTestTestOutputReference;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}
*/
var ObservatoryScheduledTest = /** @class */ (function (_super) {
    __extends(ObservatoryScheduledTest, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ObservatoryScheduledTestConfig
    */
    function ObservatoryScheduledTest(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_observatory_scheduled_test',
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
        // schedule - computed: true, optional: false, required: false
        _this._schedule = new ObservatoryScheduledTestScheduleOutputReference(_this, "schedule");
        // test - computed: true, optional: false, required: false
        _this._test = new ObservatoryScheduledTestTestOutputReference(_this, "test");
        _this._frequency = config.frequency;
        _this._region = config.region;
        _this._url = config.url;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ObservatoryScheduledTest to import
    * @param importFromId The id of the existing ObservatoryScheduledTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ObservatoryScheduledTest to import is found
    */
    ObservatoryScheduledTest.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_observatory_scheduled_test", importId: importFromId, provider: provider });
    };
    Object.defineProperty(ObservatoryScheduledTest.prototype, "frequency", {
        get: function () {
            return this.getStringAttribute('frequency');
        },
        set: function (value) {
            this._frequency = value;
        },
        enumerable: false,
        configurable: true
    });
    ObservatoryScheduledTest.prototype.resetFrequency = function () {
        this._frequency = undefined;
    };
    Object.defineProperty(ObservatoryScheduledTest.prototype, "frequencyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._frequency;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    ObservatoryScheduledTest.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(ObservatoryScheduledTest.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "schedule", {
        get: function () {
            return this._schedule;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "test", {
        get: function () {
            return this._test;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "url", {
        get: function () {
            return this.getStringAttribute('url');
        },
        set: function (value) {
            this._url = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "urlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservatoryScheduledTest.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    ObservatoryScheduledTest.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(ObservatoryScheduledTest.prototype, "zoneIdInput", {
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
    ObservatoryScheduledTest.prototype.synthesizeAttributes = function () {
        return {
            frequency: cdktf.stringToTerraform(this._frequency),
            region: cdktf.stringToTerraform(this._region),
            url: cdktf.stringToTerraform(this._url),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    ObservatoryScheduledTest.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            frequency: {
                value: cdktf.stringToHclTerraform(this._frequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            region: {
                value: cdktf.stringToHclTerraform(this._region),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            url: {
                value: cdktf.stringToHclTerraform(this._url),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
    ObservatoryScheduledTest.tfResourceType = "cloudflare_observatory_scheduled_test";
    return ObservatoryScheduledTest;
}(cdktf.TerraformResource));
exports.ObservatoryScheduledTest = ObservatoryScheduledTest;
