"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules
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
exports.DataCloudflareZeroTrustDevicePostureRules = exports.DataCloudflareZeroTrustDevicePostureRulesResultList = exports.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference = exports.DataCloudflareZeroTrustDevicePostureRulesResultMatchList = exports.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference = exports.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference = exports.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference = void 0;
exports.dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToTerraform = dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToHclTerraform = dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToHclTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultInputToTerraform = dataCloudflareZeroTrustDevicePostureRulesResultInputToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultInputToHclTerraform = dataCloudflareZeroTrustDevicePostureRulesResultInputToHclTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultMatchToTerraform = dataCloudflareZeroTrustDevicePostureRulesResultMatchToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultMatchToHclTerraform = dataCloudflareZeroTrustDevicePostureRulesResultMatchToHclTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultToTerraform = dataCloudflareZeroTrustDevicePostureRulesResultToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRulesResultToHclTerraform = dataCloudflareZeroTrustDevicePostureRulesResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRulesResultInputLocationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.prototype, "paths", {
        // paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference.prototype, "trustStores", {
        // trust_stores - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('trust_stores');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference = DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference;
function dataCloudflareZeroTrustDevicePostureRulesResultInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRulesResultInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // locations - computed: true, optional: false, required: false
        _this._locations = new DataCloudflareZeroTrustDevicePostureRulesResultInputLocationsOutputReference(_this, "locations");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "activeThreats", {
        // active_threats - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('active_threats');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "authState", {
        // auth_state - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('auth_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "checkDisks", {
        // check_disks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_disks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "checkPrivateKey", {
        // check_private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('check_private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "cn", {
        // cn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "complianceStatus", {
        // compliance_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compliance_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "connectionId", {
        // connection_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "countOperator", {
        // count_operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('count_operator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "eidLastSeen", {
        // eid_last_seen - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('eid_last_seen');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "exists", {
        // exists - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exists');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "extendedKeyUsage", {
        // extended_key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('extended_key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "infected", {
        // infected - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('infected');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "isActive", {
        // is_active - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "issueCount", {
        // issue_count - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issue_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "lastSeen", {
        // last_seen - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "locations", {
        get: function () {
            return this._locations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "networkStatus", {
        // network_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "operatingSystem", {
        // operating_system - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "operationalState", {
        // operational_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operational_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "operator", {
        // operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "os", {
        // os - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "osDistroName", {
        // os_distro_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_distro_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "osDistroRevision", {
        // os_distro_revision - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_distro_revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "osVersionExtra", {
        // os_version_extra - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_version_extra');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "overall", {
        // overall - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('overall');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "requireAll", {
        // require_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "riskLevel", {
        // risk_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('risk_level');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "score", {
        // score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "scoreOperator", {
        // score_operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('score_operator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "sensorConfig", {
        // sensor_config - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sensor_config');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "sha256", {
        // sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "subjectAlternativeNames", {
        // subject_alternative_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subject_alternative_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "thumbprint", {
        // thumbprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "totalScore", {
        // total_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "updateWindowDays", {
        // update_window_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('update_window_days');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference.prototype, "versionOperator", {
        // version_operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_operator');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference = DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference;
function dataCloudflareZeroTrustDevicePostureRulesResultMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRulesResultMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference = DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference;
var DataCloudflareZeroTrustDevicePostureRulesResultMatchList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRulesResultMatchList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDevicePostureRulesResultMatchList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDevicePostureRulesResultMatchList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDevicePostureRulesResultMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDevicePostureRulesResultMatchList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDevicePostureRulesResultMatchList = DataCloudflareZeroTrustDevicePostureRulesResultMatchList;
function dataCloudflareZeroTrustDevicePostureRulesResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRulesResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRulesResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDevicePostureRulesResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // input - computed: true, optional: false, required: false
        _this._input = new DataCloudflareZeroTrustDevicePostureRulesResultInputOutputReference(_this, "input");
        // match - computed: true, optional: false, required: false
        _this._match = new DataCloudflareZeroTrustDevicePostureRulesResultMatchList(_this, "match", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "expiration", {
        // expiration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "schedule", {
        // schedule - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schedule');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRulesResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRulesResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRulesResultOutputReference = DataCloudflareZeroTrustDevicePostureRulesResultOutputReference;
var DataCloudflareZeroTrustDevicePostureRulesResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRulesResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDevicePostureRulesResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDevicePostureRulesResultList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDevicePostureRulesResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDevicePostureRulesResultList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDevicePostureRulesResultList = DataCloudflareZeroTrustDevicePostureRulesResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules}
*/
var DataCloudflareZeroTrustDevicePostureRules = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRules, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules cloudflare_zero_trust_device_posture_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureRulesConfig = {}
    */
    function DataCloudflareZeroTrustDevicePostureRules(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_rules',
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
        // result - computed: true, optional: false, required: false
        _this._result = new DataCloudflareZeroTrustDevicePostureRulesResultList(_this, "result", false);
        _this._accountId = config.accountId;
        _this._maxItems = config.maxItems;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRules to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRules to import is found
    */
    DataCloudflareZeroTrustDevicePostureRules.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rules", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRules.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDevicePostureRules.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRules.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRules.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDevicePostureRules.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRules.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRules.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDevicePostureRules.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
        };
    };
    DataCloudflareZeroTrustDevicePostureRules.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
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
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataCloudflareZeroTrustDevicePostureRules.tfResourceType = "cloudflare_zero_trust_device_posture_rules";
    return DataCloudflareZeroTrustDevicePostureRules;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDevicePostureRules = DataCloudflareZeroTrustDevicePostureRules;
