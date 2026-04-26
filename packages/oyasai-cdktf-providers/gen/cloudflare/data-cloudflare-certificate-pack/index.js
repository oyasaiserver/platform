"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack
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
exports.DataCloudflareCertificatePack = exports.DataCloudflareCertificatePackValidationRecordsList = exports.DataCloudflareCertificatePackValidationRecordsOutputReference = exports.DataCloudflareCertificatePackValidationErrorsList = exports.DataCloudflareCertificatePackValidationErrorsOutputReference = exports.DataCloudflareCertificatePackFilterOutputReference = exports.DataCloudflareCertificatePackDcvDelegationRecordsList = exports.DataCloudflareCertificatePackDcvDelegationRecordsOutputReference = exports.DataCloudflareCertificatePackCertificatesList = exports.DataCloudflareCertificatePackCertificatesOutputReference = exports.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference = void 0;
exports.dataCloudflareCertificatePackCertificatesGeoRestrictionsToTerraform = dataCloudflareCertificatePackCertificatesGeoRestrictionsToTerraform;
exports.dataCloudflareCertificatePackCertificatesGeoRestrictionsToHclTerraform = dataCloudflareCertificatePackCertificatesGeoRestrictionsToHclTerraform;
exports.dataCloudflareCertificatePackCertificatesToTerraform = dataCloudflareCertificatePackCertificatesToTerraform;
exports.dataCloudflareCertificatePackCertificatesToHclTerraform = dataCloudflareCertificatePackCertificatesToHclTerraform;
exports.dataCloudflareCertificatePackDcvDelegationRecordsToTerraform = dataCloudflareCertificatePackDcvDelegationRecordsToTerraform;
exports.dataCloudflareCertificatePackDcvDelegationRecordsToHclTerraform = dataCloudflareCertificatePackDcvDelegationRecordsToHclTerraform;
exports.dataCloudflareCertificatePackFilterToTerraform = dataCloudflareCertificatePackFilterToTerraform;
exports.dataCloudflareCertificatePackFilterToHclTerraform = dataCloudflareCertificatePackFilterToHclTerraform;
exports.dataCloudflareCertificatePackValidationErrorsToTerraform = dataCloudflareCertificatePackValidationErrorsToTerraform;
exports.dataCloudflareCertificatePackValidationErrorsToHclTerraform = dataCloudflareCertificatePackValidationErrorsToHclTerraform;
exports.dataCloudflareCertificatePackValidationRecordsToTerraform = dataCloudflareCertificatePackValidationRecordsToTerraform;
exports.dataCloudflareCertificatePackValidationRecordsToHclTerraform = dataCloudflareCertificatePackValidationRecordsToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCertificatePackCertificatesGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePackCertificatesGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference = DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference;
function dataCloudflareCertificatePackCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePackCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePackCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // geo_restrictions - computed: true, optional: false, required: false
        _this._geoRestrictions = new DataCloudflareCertificatePackCertificatesGeoRestrictionsOutputReference(_this, "geo_restrictions");
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "bundleMethod", {
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "geoRestrictions", {
        get: function () {
            return this._geoRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackCertificatesOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePackCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePackCertificatesOutputReference = DataCloudflareCertificatePackCertificatesOutputReference;
var DataCloudflareCertificatePackCertificatesList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackCertificatesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackCertificatesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePackCertificatesList.prototype.get = function (index) {
        return new DataCloudflareCertificatePackCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePackCertificatesList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePackCertificatesList = DataCloudflareCertificatePackCertificatesList;
function dataCloudflareCertificatePackDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePackDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePackDcvDelegationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackDcvDelegationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackDcvDelegationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePackDcvDelegationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePackDcvDelegationRecordsOutputReference = DataCloudflareCertificatePackDcvDelegationRecordsOutputReference;
var DataCloudflareCertificatePackDcvDelegationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackDcvDelegationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackDcvDelegationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePackDcvDelegationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCertificatePackDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePackDcvDelegationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePackDcvDelegationRecordsList = DataCloudflareCertificatePackDcvDelegationRecordsList;
function dataCloudflareCertificatePackFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deploy: cdktf.stringToTerraform(struct.deploy),
        status: cdktf.stringToTerraform(struct.status),
    };
}
function dataCloudflareCertificatePackFilterToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {
        deploy: {
            value: cdktf.stringToHclTerraform(struct.deploy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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
var DataCloudflareCertificatePackFilterOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackFilterOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCertificatePackFilterOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePackFilterOutputReference.prototype, "internalValue", {
        get: function () {
            if (this.resolvableValue) {
                return this.resolvableValue;
            }
            var hasAnyValues = this.isEmptyObject;
            var internalValueResult = {};
            if (this._deploy !== undefined) {
                hasAnyValues = true;
                internalValueResult.deploy = this._deploy;
            }
            if (this._status !== undefined) {
                hasAnyValues = true;
                internalValueResult.status = this._status;
            }
            return hasAnyValues ? internalValueResult : undefined;
        },
        set: function (value) {
            if (value === undefined) {
                this.isEmptyObject = false;
                this.resolvableValue = undefined;
                this._deploy = undefined;
                this._status = undefined;
            }
            else if (cdktf.Tokenization.isResolvable(value)) {
                this.isEmptyObject = false;
                this.resolvableValue = value;
            }
            else {
                this.isEmptyObject = Object.keys(value).length === 0;
                this.resolvableValue = undefined;
                this._deploy = value.deploy;
                this._status = value.status;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackFilterOutputReference.prototype, "deploy", {
        get: function () {
            return this.getStringAttribute('deploy');
        },
        set: function (value) {
            this._deploy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePackFilterOutputReference.prototype.resetDeploy = function () {
        this._deploy = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePackFilterOutputReference.prototype, "deployInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackFilterOutputReference.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePackFilterOutputReference.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePackFilterOutputReference.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePackFilterOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePackFilterOutputReference = DataCloudflareCertificatePackFilterOutputReference;
function dataCloudflareCertificatePackValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePackValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePackValidationErrorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackValidationErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackValidationErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePackValidationErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePackValidationErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePackValidationErrorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePackValidationErrorsOutputReference = DataCloudflareCertificatePackValidationErrorsOutputReference;
var DataCloudflareCertificatePackValidationErrorsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackValidationErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackValidationErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePackValidationErrorsList.prototype.get = function (index) {
        return new DataCloudflareCertificatePackValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePackValidationErrorsList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePackValidationErrorsList = DataCloudflareCertificatePackValidationErrorsList;
function dataCloudflareCertificatePackValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePackValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePackValidationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackValidationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackValidationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePackValidationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePackValidationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePackValidationRecordsOutputReference = DataCloudflareCertificatePackValidationRecordsOutputReference;
var DataCloudflareCertificatePackValidationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePackValidationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePackValidationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePackValidationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCertificatePackValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePackValidationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePackValidationRecordsList = DataCloudflareCertificatePackValidationRecordsList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack cloudflare_certificate_pack}
*/
var DataCloudflareCertificatePack = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack cloudflare_certificate_pack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCertificatePackConfig = {}
    */
    function DataCloudflareCertificatePack(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_certificate_pack',
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
        // certificates - computed: true, optional: false, required: false
        _this._certificates = new DataCloudflareCertificatePackCertificatesList(_this, "certificates", false);
        // dcv_delegation_records - computed: true, optional: false, required: false
        _this._dcvDelegationRecords = new DataCloudflareCertificatePackDcvDelegationRecordsList(_this, "dcv_delegation_records", false);
        // filter - computed: false, optional: true, required: false
        _this._filter = new DataCloudflareCertificatePackFilterOutputReference(_this, "filter");
        // validation_errors - computed: true, optional: false, required: false
        _this._validationErrors = new DataCloudflareCertificatePackValidationErrorsList(_this, "validation_errors", false);
        // validation_records - computed: true, optional: false, required: false
        _this._validationRecords = new DataCloudflareCertificatePackValidationRecordsList(_this, "validation_records", false);
        _this._certificatePackId = config.certificatePackId;
        _this._filter.internalValue = config.filter;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCertificatePack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCertificatePack to import
    * @param importFromId The id of the existing DataCloudflareCertificatePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCertificatePack to import is found
    */
    DataCloudflareCertificatePack.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_pack", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "certificateAuthority", {
        // ==========
        // ATTRIBUTES
        // ==========
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "certificatePackId", {
        get: function () {
            return this.getStringAttribute('certificate_pack_id');
        },
        set: function (value) {
            this._certificatePackId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePack.prototype.resetCertificatePackId = function () {
        this._certificatePackId = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "certificatePackIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._certificatePackId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "certificates", {
        get: function () {
            return this._certificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "cloudflareBranding", {
        // cloudflare_branding - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_branding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "dcvDelegationRecords", {
        get: function () {
            return this._dcvDelegationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "filter", {
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePack.prototype.putFilter = function (value) {
        this._filter.internalValue = value;
    };
    DataCloudflareCertificatePack.prototype.resetFilter = function () {
        this._filter.internalValue = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter.internalValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('hosts'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "primaryCertificate", {
        // primary_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "validationMethod", {
        // validation_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "validationRecords", {
        get: function () {
            return this._validationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "validityDays", {
        // validity_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('validity_days');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePack.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePack.prototype, "zoneIdInput", {
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
    DataCloudflareCertificatePack.prototype.synthesizeAttributes = function () {
        return {
            certificate_pack_id: cdktf.stringToTerraform(this._certificatePackId),
            filter: dataCloudflareCertificatePackFilterToTerraform(this._filter.internalValue),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCertificatePack.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            certificate_pack_id: {
                value: cdktf.stringToHclTerraform(this._certificatePackId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: dataCloudflareCertificatePackFilterToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "DataCloudflareCertificatePackFilter",
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
    DataCloudflareCertificatePack.tfResourceType = "cloudflare_certificate_pack";
    return DataCloudflareCertificatePack;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCertificatePack = DataCloudflareCertificatePack;
