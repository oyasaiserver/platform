"use strict";
// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs
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
exports.DataCloudflareCertificatePacks = exports.DataCloudflareCertificatePacksResultList = exports.DataCloudflareCertificatePacksResultOutputReference = exports.DataCloudflareCertificatePacksResultValidationRecordsList = exports.DataCloudflareCertificatePacksResultValidationRecordsOutputReference = exports.DataCloudflareCertificatePacksResultValidationErrorsList = exports.DataCloudflareCertificatePacksResultValidationErrorsOutputReference = exports.DataCloudflareCertificatePacksResultDcvDelegationRecordsList = exports.DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference = exports.DataCloudflareCertificatePacksResultCertificatesList = exports.DataCloudflareCertificatePacksResultCertificatesOutputReference = exports.DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference = void 0;
exports.dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToTerraform = dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToTerraform;
exports.dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToHclTerraform = dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToHclTerraform;
exports.dataCloudflareCertificatePacksResultCertificatesToTerraform = dataCloudflareCertificatePacksResultCertificatesToTerraform;
exports.dataCloudflareCertificatePacksResultCertificatesToHclTerraform = dataCloudflareCertificatePacksResultCertificatesToHclTerraform;
exports.dataCloudflareCertificatePacksResultDcvDelegationRecordsToTerraform = dataCloudflareCertificatePacksResultDcvDelegationRecordsToTerraform;
exports.dataCloudflareCertificatePacksResultDcvDelegationRecordsToHclTerraform = dataCloudflareCertificatePacksResultDcvDelegationRecordsToHclTerraform;
exports.dataCloudflareCertificatePacksResultValidationErrorsToTerraform = dataCloudflareCertificatePacksResultValidationErrorsToTerraform;
exports.dataCloudflareCertificatePacksResultValidationErrorsToHclTerraform = dataCloudflareCertificatePacksResultValidationErrorsToHclTerraform;
exports.dataCloudflareCertificatePacksResultValidationRecordsToTerraform = dataCloudflareCertificatePacksResultValidationRecordsToTerraform;
exports.dataCloudflareCertificatePacksResultValidationRecordsToHclTerraform = dataCloudflareCertificatePacksResultValidationRecordsToHclTerraform;
exports.dataCloudflareCertificatePacksResultToTerraform = dataCloudflareCertificatePacksResultToTerraform;
exports.dataCloudflareCertificatePacksResultToHclTerraform = dataCloudflareCertificatePacksResultToHclTerraform;
var cdktf = require("cdktf");
function dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePacksResultCertificatesGeoRestrictionsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    function DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference(terraformResource, terraformAttribute) {
        var _this = _super.call(this, terraformResource, terraformAttribute, false) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference.prototype, "label", {
        // label - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('label');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference = DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference;
function dataCloudflareCertificatePacksResultCertificatesToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePacksResultCertificatesToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePacksResultCertificatesOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultCertificatesOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultCertificatesOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // geo_restrictions - computed: true, optional: false, required: false
        _this._geoRestrictions = new DataCloudflareCertificatePacksResultCertificatesGeoRestrictionsOutputReference(_this, "geo_restrictions");
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "bundleMethod", {
        // bundle_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bundle_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "expiresOn", {
        // expires_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expires_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "geoRestrictions", {
        get: function () {
            return this._geoRestrictions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('hosts');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "modifiedOn", {
        // modified_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('modified_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "priority", {
        // priority - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('priority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "signature", {
        // signature - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('signature');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "uploadedOn", {
        // uploaded_on - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('uploaded_on');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultCertificatesOutputReference.prototype, "zoneId", {
        // zone_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePacksResultCertificatesOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePacksResultCertificatesOutputReference = DataCloudflareCertificatePacksResultCertificatesOutputReference;
var DataCloudflareCertificatePacksResultCertificatesList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultCertificatesList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultCertificatesList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePacksResultCertificatesList.prototype.get = function (index) {
        return new DataCloudflareCertificatePacksResultCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePacksResultCertificatesList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePacksResultCertificatesList = DataCloudflareCertificatePacksResultCertificatesList;
function dataCloudflareCertificatePacksResultDcvDelegationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePacksResultDcvDelegationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference = DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference;
var DataCloudflareCertificatePacksResultDcvDelegationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultDcvDelegationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultDcvDelegationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePacksResultDcvDelegationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCertificatePacksResultDcvDelegationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePacksResultDcvDelegationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePacksResultDcvDelegationRecordsList = DataCloudflareCertificatePacksResultDcvDelegationRecordsList;
function dataCloudflareCertificatePacksResultValidationErrorsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePacksResultValidationErrorsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePacksResultValidationErrorsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultValidationErrorsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultValidationErrorsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationErrorsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationErrorsOutputReference.prototype, "message", {
        // message - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('message');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePacksResultValidationErrorsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePacksResultValidationErrorsOutputReference = DataCloudflareCertificatePacksResultValidationErrorsOutputReference;
var DataCloudflareCertificatePacksResultValidationErrorsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultValidationErrorsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultValidationErrorsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePacksResultValidationErrorsList.prototype.get = function (index) {
        return new DataCloudflareCertificatePacksResultValidationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePacksResultValidationErrorsList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePacksResultValidationErrorsList = DataCloudflareCertificatePacksResultValidationErrorsList;
function dataCloudflareCertificatePacksResultValidationRecordsToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePacksResultValidationRecordsToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePacksResultValidationRecordsOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultValidationRecordsOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultValidationRecordsOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "cname", {
        // cname - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "cnameTarget", {
        // cname_target - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cname_target');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "emails", {
        // emails - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('emails');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "httpBody", {
        // http_body - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_body');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "httpUrl", {
        // http_url - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('http_url');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "txtName", {
        // txt_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultValidationRecordsOutputReference.prototype, "txtValue", {
        // txt_value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('txt_value');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePacksResultValidationRecordsOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePacksResultValidationRecordsOutputReference = DataCloudflareCertificatePacksResultValidationRecordsOutputReference;
var DataCloudflareCertificatePacksResultValidationRecordsList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultValidationRecordsList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultValidationRecordsList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePacksResultValidationRecordsList.prototype.get = function (index) {
        return new DataCloudflareCertificatePacksResultValidationRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePacksResultValidationRecordsList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePacksResultValidationRecordsList = DataCloudflareCertificatePacksResultValidationRecordsList;
function dataCloudflareCertificatePacksResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
function dataCloudflareCertificatePacksResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    var attrs = {};
    return attrs;
}
var DataCloudflareCertificatePacksResultOutputReference = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultOutputReference, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultOutputReference(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex) || this;
        _this.isEmptyObject = false;
        // certificates - computed: true, optional: false, required: false
        _this._certificates = new DataCloudflareCertificatePacksResultCertificatesList(_this, "certificates", false);
        // dcv_delegation_records - computed: true, optional: false, required: false
        _this._dcvDelegationRecords = new DataCloudflareCertificatePacksResultDcvDelegationRecordsList(_this, "dcv_delegation_records", false);
        // validation_errors - computed: true, optional: false, required: false
        _this._validationErrors = new DataCloudflareCertificatePacksResultValidationErrorsList(_this, "validation_errors", false);
        // validation_records - computed: true, optional: false, required: false
        _this._validationRecords = new DataCloudflareCertificatePacksResultValidationRecordsList(_this, "validation_records", false);
        return _this;
    }
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "internalValue", {
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
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "certificateAuthority", {
        // certificate_authority - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('certificate_authority');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "certificates", {
        get: function () {
            return this._certificates;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "cloudflareBranding", {
        // cloudflare_branding - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('cloudflare_branding');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "dcvDelegationRecords", {
        get: function () {
            return this._dcvDelegationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "hosts", {
        // hosts - computed: true, optional: false, required: false
        get: function () {
            return cdktf.Fn.tolist(this.getListAttribute('hosts'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "id", {
        // id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "primaryCertificate", {
        // primary_certificate - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('primary_certificate');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "validationErrors", {
        get: function () {
            return this._validationErrors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "validationMethod", {
        // validation_method - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('validation_method');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "validationRecords", {
        get: function () {
            return this._validationRecords;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacksResultOutputReference.prototype, "validityDays", {
        // validity_days - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('validity_days');
        },
        enumerable: false,
        configurable: true
    });
    return DataCloudflareCertificatePacksResultOutputReference;
}(cdktf.ComplexObject));
exports.DataCloudflareCertificatePacksResultOutputReference = DataCloudflareCertificatePacksResultOutputReference;
var DataCloudflareCertificatePacksResultList = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacksResultList, _super);
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    function DataCloudflareCertificatePacksResultList(terraformResource, terraformAttribute, wrapsSet) {
        var _this = _super.call(this, terraformResource, terraformAttribute, wrapsSet) || this;
        _this.terraformResource = terraformResource;
        _this.terraformAttribute = terraformAttribute;
        _this.wrapsSet = wrapsSet;
        return _this;
    }
    /**
    * @param index the index of the item to return
    */
    DataCloudflareCertificatePacksResultList.prototype.get = function (index) {
        return new DataCloudflareCertificatePacksResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    };
    return DataCloudflareCertificatePacksResultList;
}(cdktf.ComplexList));
exports.DataCloudflareCertificatePacksResultList = DataCloudflareCertificatePacksResultList;
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs cloudflare_certificate_packs}
*/
var DataCloudflareCertificatePacks = /** @class */ (function (_super) {
    __extends(DataCloudflareCertificatePacks, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs cloudflare_certificate_packs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareCertificatePacksConfig = {}
    */
    function DataCloudflareCertificatePacks(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'cloudflare_certificate_packs',
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
        _this._result = new DataCloudflareCertificatePacksResultList(_this, "result", false);
        _this._deploy = config.deploy;
        _this._maxItems = config.maxItems;
        _this._status = config.status;
        _this._zoneId = config.zoneId;
        return _this;
    }
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareCertificatePacks resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareCertificatePacks to import
    * @param importFromId The id of the existing DataCloudflareCertificatePacks that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/certificate_packs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareCertificatePacks to import is found
    */
    DataCloudflareCertificatePacks.generateConfigForImport = function (scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_certificate_packs", importId: importFromId, provider: provider });
    };
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "deploy", {
        get: function () {
            return this.getStringAttribute('deploy');
        },
        set: function (value) {
            this._deploy = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePacks.prototype.resetDeploy = function () {
        this._deploy = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "deployInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "maxItems", {
        get: function () {
            return this.getNumberAttribute('max_items');
        },
        set: function (value) {
            this._maxItems = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePacks.prototype.resetMaxItems = function () {
        this._maxItems = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "maxItemsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._maxItems;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "result", {
        get: function () {
            return this._result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "status", {
        get: function () {
            return this.getStringAttribute('status');
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePacks.prototype.resetStatus = function () {
        this._status = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "statusInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "zoneId", {
        get: function () {
            return this.getStringAttribute('zone_id');
        },
        set: function (value) {
            this._zoneId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataCloudflareCertificatePacks.prototype.resetZoneId = function () {
        this._zoneId = undefined;
    };
    Object.defineProperty(DataCloudflareCertificatePacks.prototype, "zoneIdInput", {
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
    DataCloudflareCertificatePacks.prototype.synthesizeAttributes = function () {
        return {
            deploy: cdktf.stringToTerraform(this._deploy),
            max_items: cdktf.numberToTerraform(this._maxItems),
            status: cdktf.stringToTerraform(this._status),
            zone_id: cdktf.stringToTerraform(this._zoneId),
        };
    };
    DataCloudflareCertificatePacks.prototype.synthesizeHclAttributes = function () {
        var attrs = {
            deploy: {
                value: cdktf.stringToHclTerraform(this._deploy),
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
            status: {
                value: cdktf.stringToHclTerraform(this._status),
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
    DataCloudflareCertificatePacks.tfResourceType = "cloudflare_certificate_packs";
    return DataCloudflareCertificatePacks;
}(cdktf.TerraformDataSource));
exports.DataCloudflareCertificatePacks = DataCloudflareCertificatePacks;
