"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule
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
exports.DataCloudflareZeroTrustDevicePostureRule = exports.DataCloudflareZeroTrustDevicePostureRuleMatchList = exports.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference = exports.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference = exports.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference = void 0;
exports.dataCloudflareZeroTrustDevicePostureRuleInputLocationsToTerraform = dataCloudflareZeroTrustDevicePostureRuleInputLocationsToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRuleInputLocationsToHclTerraform = dataCloudflareZeroTrustDevicePostureRuleInputLocationsToHclTerraform;
exports.dataCloudflareZeroTrustDevicePostureRuleInputToTerraform = dataCloudflareZeroTrustDevicePostureRuleInputToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRuleInputToHclTerraform = dataCloudflareZeroTrustDevicePostureRuleInputToHclTerraform;
exports.dataCloudflareZeroTrustDevicePostureRuleMatchToTerraform = dataCloudflareZeroTrustDevicePostureRuleMatchToTerraform;
exports.dataCloudflareZeroTrustDevicePostureRuleMatchToHclTerraform = dataCloudflareZeroTrustDevicePostureRuleMatchToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareZeroTrustDevicePostureRuleInputLocationsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRuleInputLocationsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "paths", {
        // paths - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('paths');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference.prototype, "trustStores", {
        // trust_stores - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('trust_stores');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference = DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference;
function dataCloudflareZeroTrustDevicePostureRuleInputToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRuleInputToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRuleInputOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareZeroTrustDevicePostureRuleInputOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        // locations - computed: true, optional: false, required: false
        _this._locations = new DataCloudflareZeroTrustDevicePostureRuleInputLocationsOutputReference(_this, "locations");
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "activeThreats", {
        // active_threats - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('active_threats');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "authState", {
        // auth_state - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('auth_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "certificateId", {
        // certificate_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "checkDisks", {
        // check_disks - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('check_disks');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "checkPrivateKey", {
        // check_private_key - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('check_private_key');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "cn", {
        // cn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "complianceStatus", {
        // compliance_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('compliance_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "connectionId", {
        // connection_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "countOperator", {
        // count_operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('count_operator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "domain", {
        // domain - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "eidLastSeen", {
        // eid_last_seen - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('eid_last_seen');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "enabled", {
        // enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "exists", {
        // exists - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('exists');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "extendedKeyUsage", {
        // extended_key_usage - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('extended_key_usage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "infected", {
        // infected - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('infected');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "isActive", {
        // is_active - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_active');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "issueCount", {
        // issue_count - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issue_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "lastSeen", {
        // last_seen - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_seen');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "locations", {
        get: function () {
            return this._locations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "networkStatus", {
        // network_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('network_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "operatingSystem", {
        // operating_system - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operating_system');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "operationalState", {
        // operational_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operational_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "operator", {
        // operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('operator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "os", {
        // os - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "osDistroName", {
        // os_distro_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_distro_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "osDistroRevision", {
        // os_distro_revision - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_distro_revision');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "osVersionExtra", {
        // os_version_extra - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('os_version_extra');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "overall", {
        // overall - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('overall');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "path", {
        // path - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('path');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "requireAll", {
        // require_all - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_all');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "riskLevel", {
        // risk_level - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('risk_level');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "score", {
        // score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "scoreOperator", {
        // score_operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('score_operator');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "sensorConfig", {
        // sensor_config - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sensor_config');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "sha256", {
        // sha256 - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('sha256');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "state", {
        // state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "subjectAlternativeNames", {
        // subject_alternative_names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subject_alternative_names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "thumbprint", {
        // thumbprint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('thumbprint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "totalScore", {
        // total_score - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('total_score');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "updateWindowDays", {
        // update_window_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('update_window_days');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleInputOutputReference.prototype, "versionOperator", {
        // version_operator - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version_operator');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRuleInputOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRuleInputOutputReference = DataCloudflareZeroTrustDevicePostureRuleInputOutputReference;
function dataCloudflareZeroTrustDevicePostureRuleMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareZeroTrustDevicePostureRuleMatchToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference.prototype, "platform", {
        // platform - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference = DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference;
var DataCloudflareZeroTrustDevicePostureRuleMatchList = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRuleMatchList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareZeroTrustDevicePostureRuleMatchList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareZeroTrustDevicePostureRuleMatchList.prototype.get = function (index) {
        return new DataCloudflareZeroTrustDevicePostureRuleMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareZeroTrustDevicePostureRuleMatchList;
}(cdktf.ComplexList));
exports.DataCloudflareZeroTrustDevicePostureRuleMatchList = DataCloudflareZeroTrustDevicePostureRuleMatchList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}
*/
var DataCloudflareZeroTrustDevicePostureRule = /** @class */ (function (_super) {
    __extends(DataCloudflareZeroTrustDevicePostureRule, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareZeroTrustDevicePostureRuleConfig
    */
    function DataCloudflareZeroTrustDevicePostureRule(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_zero_trust_device_posture_rule',
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
        // input - computed: true, optional: false, required: false
        _this._input = new DataCloudflareZeroTrustDevicePostureRuleInputOutputReference(_this, "input");
        // match - computed: true, optional: false, required: false
        _this._match = new DataCloudflareZeroTrustDevicePostureRuleMatchList(_this, "match", false);
        _this._accountId = config.accountId;
        _this._ruleId = config.ruleId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareZeroTrustDevicePostureRule to import
    * @param importFromId The id of the existing DataCloudflareZeroTrustDevicePostureRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareZeroTrustDevicePostureRule to import is found
    */
    DataCloudflareZeroTrustDevicePostureRule.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_zero_trust_device_posture_rule", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareZeroTrustDevicePostureRule.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "expiration", {
        // expiration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "input", {
        get: function () {
            return this._input;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "match", {
        get: function () {
            return this._match;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "ruleId", {
        get: function () {
            return this.getStringAttribute('rule_id');
        },
        set: function (value) {
            this._ruleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "ruleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ruleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "schedule", {
        // schedule - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('schedule');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareZeroTrustDevicePostureRule.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataCloudflareZeroTrustDevicePostureRule.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            rule_id: cdktf.stringToTerraform(this._ruleId),
        };
    };
    DataCloudflareZeroTrustDevicePostureRule.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule_id: {
                value: cdktf.stringToHclTerraform(this._ruleId),
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
    DataCloudflareZeroTrustDevicePostureRule.tfResourceType = "cloudflare_zero_trust_device_posture_rule";
    return DataCloudflareZeroTrustDevicePostureRule;
}(cdktf.TerraformDataSource));
exports.DataCloudflareZeroTrustDevicePostureRule = DataCloudflareZeroTrustDevicePostureRule;
