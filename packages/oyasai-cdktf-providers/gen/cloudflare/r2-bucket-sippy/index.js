// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function r2BucketSippyDestinationToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        cloud_provider: cdktf.stringToTerraform(struct.cloudProvider),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
export function r2BucketSippyDestinationToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloud_provider: {
            value: cdktf.stringToHclTerraform(struct.cloudProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketSippyDestinationOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKeyId = this._accessKeyId;
        }
        if (this._cloudProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudProvider = this._cloudProvider;
        }
        if (this._secretAccessKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessKey = this._secretAccessKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessKeyId = undefined;
            this._cloudProvider = undefined;
            this._secretAccessKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKeyId = value.accessKeyId;
            this._cloudProvider = value.cloudProvider;
            this._secretAccessKey = value.secretAccessKey;
        }
    }
    // access_key_id - computed: false, optional: true, required: false
    _accessKeyId;
    get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    set accessKeyId(value) {
        this._accessKeyId = value;
    }
    resetAccessKeyId() {
        this._accessKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyIdInput() {
        return this._accessKeyId;
    }
    // cloud_provider - computed: false, optional: true, required: false
    _cloudProvider;
    get cloudProvider() {
        return this.getStringAttribute('cloud_provider');
    }
    set cloudProvider(value) {
        this._cloudProvider = value;
    }
    resetCloudProvider() {
        this._cloudProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudProviderInput() {
        return this._cloudProvider;
    }
    // secret_access_key - computed: false, optional: true, required: false
    _secretAccessKey;
    get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    set secretAccessKey(value) {
        this._secretAccessKey = value;
    }
    resetSecretAccessKey() {
        this._secretAccessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretAccessKeyInput() {
        return this._secretAccessKey;
    }
}
export function r2BucketSippySourceToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key_id: cdktf.stringToTerraform(struct.accessKeyId),
        bucket: cdktf.stringToTerraform(struct.bucket),
        bucket_url: cdktf.stringToTerraform(struct.bucketUrl),
        client_email: cdktf.stringToTerraform(struct.clientEmail),
        cloud_provider: cdktf.stringToTerraform(struct.cloudProvider),
        private_key: cdktf.stringToTerraform(struct.privateKey),
        region: cdktf.stringToTerraform(struct.region),
        secret_access_key: cdktf.stringToTerraform(struct.secretAccessKey),
    };
}
export function r2BucketSippySourceToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {
        access_key_id: {
            value: cdktf.stringToHclTerraform(struct.accessKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket: {
            value: cdktf.stringToHclTerraform(struct.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_url: {
            value: cdktf.stringToHclTerraform(struct.bucketUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_email: {
            value: cdktf.stringToHclTerraform(struct.clientEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cloud_provider: {
            value: cdktf.stringToHclTerraform(struct.cloudProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        private_key: {
            value: cdktf.stringToHclTerraform(struct.privateKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktf.stringToHclTerraform(struct.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_access_key: {
            value: cdktf.stringToHclTerraform(struct.secretAccessKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };
    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}
export class R2BucketSippySourceOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    resolvableValue;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._accessKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessKeyId = this._accessKeyId;
        }
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._bucketUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketUrl = this._bucketUrl;
        }
        if (this._clientEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientEmail = this._clientEmail;
        }
        if (this._cloudProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudProvider = this._cloudProvider;
        }
        if (this._privateKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.privateKey = this._privateKey;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._secretAccessKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretAccessKey = this._secretAccessKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessKeyId = undefined;
            this._bucket = undefined;
            this._bucketUrl = undefined;
            this._clientEmail = undefined;
            this._cloudProvider = undefined;
            this._privateKey = undefined;
            this._region = undefined;
            this._secretAccessKey = undefined;
        }
        else if (cdktf.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessKeyId = value.accessKeyId;
            this._bucket = value.bucket;
            this._bucketUrl = value.bucketUrl;
            this._clientEmail = value.clientEmail;
            this._cloudProvider = value.cloudProvider;
            this._privateKey = value.privateKey;
            this._region = value.region;
            this._secretAccessKey = value.secretAccessKey;
        }
    }
    // access_key_id - computed: false, optional: true, required: false
    _accessKeyId;
    get accessKeyId() {
        return this.getStringAttribute('access_key_id');
    }
    set accessKeyId(value) {
        this._accessKeyId = value;
    }
    resetAccessKeyId() {
        this._accessKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyIdInput() {
        return this._accessKeyId;
    }
    // bucket - computed: false, optional: true, required: false
    _bucket;
    get bucket() {
        return this.getStringAttribute('bucket');
    }
    set bucket(value) {
        this._bucket = value;
    }
    resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketInput() {
        return this._bucket;
    }
    // bucket_url - computed: false, optional: true, required: false
    _bucketUrl;
    get bucketUrl() {
        return this.getStringAttribute('bucket_url');
    }
    set bucketUrl(value) {
        this._bucketUrl = value;
    }
    resetBucketUrl() {
        this._bucketUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketUrlInput() {
        return this._bucketUrl;
    }
    // client_email - computed: false, optional: true, required: false
    _clientEmail;
    get clientEmail() {
        return this.getStringAttribute('client_email');
    }
    set clientEmail(value) {
        this._clientEmail = value;
    }
    resetClientEmail() {
        this._clientEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientEmailInput() {
        return this._clientEmail;
    }
    // cloud_provider - computed: false, optional: true, required: false
    _cloudProvider;
    get cloudProvider() {
        return this.getStringAttribute('cloud_provider');
    }
    set cloudProvider(value) {
        this._cloudProvider = value;
    }
    resetCloudProvider() {
        this._cloudProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudProviderInput() {
        return this._cloudProvider;
    }
    // private_key - computed: false, optional: true, required: false
    _privateKey;
    get privateKey() {
        return this.getStringAttribute('private_key');
    }
    set privateKey(value) {
        this._privateKey = value;
    }
    resetPrivateKey() {
        this._privateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get privateKeyInput() {
        return this._privateKey;
    }
    // region - computed: false, optional: true, required: false
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    // secret_access_key - computed: false, optional: true, required: false
    _secretAccessKey;
    get secretAccessKey() {
        return this.getStringAttribute('secret_access_key');
    }
    set secretAccessKey(value) {
        this._secretAccessKey = value;
    }
    resetSecretAccessKey() {
        this._secretAccessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get secretAccessKeyInput() {
        return this._secretAccessKey;
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy}
*/
export class R2BucketSippy extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_r2_bucket_sippy";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a R2BucketSippy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the R2BucketSippy to import
    * @param importFromId The id of the existing R2BucketSippy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the R2BucketSippy to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_r2_bucket_sippy", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/resources/r2_bucket_sippy cloudflare_r2_bucket_sippy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options R2BucketSippyConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_r2_bucket_sippy',
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
        });
        this._accountId = config.accountId;
        this._bucketName = config.bucketName;
        this._destination.internalValue = config.destination;
        this._jurisdiction = config.jurisdiction;
        this._source.internalValue = config.source;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // account_id - computed: false, optional: true, required: false
    _accountId;
    get accountId() {
        return this.getStringAttribute('account_id');
    }
    set accountId(value) {
        this._accountId = value;
    }
    resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accountIdInput() {
        return this._accountId;
    }
    // bucket_name - computed: false, optional: false, required: true
    _bucketName;
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    // destination - computed: false, optional: true, required: false
    _destination = new R2BucketSippyDestinationOutputReference(this, "destination");
    get destination() {
        return this._destination;
    }
    putDestination(value) {
        this._destination.internalValue = value;
    }
    resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination.internalValue;
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // jurisdiction - computed: true, optional: true, required: false
    _jurisdiction;
    get jurisdiction() {
        return this.getStringAttribute('jurisdiction');
    }
    set jurisdiction(value) {
        this._jurisdiction = value;
    }
    resetJurisdiction() {
        this._jurisdiction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get jurisdictionInput() {
        return this._jurisdiction;
    }
    // source - computed: false, optional: true, required: false
    _source = new R2BucketSippySourceOutputReference(this, "source");
    get source() {
        return this._source;
    }
    putSource(value) {
        this._source.internalValue = value;
    }
    resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceInput() {
        return this._source.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            bucket_name: cdktf.stringToTerraform(this._bucketName),
            destination: r2BucketSippyDestinationToTerraform(this._destination.internalValue),
            jurisdiction: cdktf.stringToTerraform(this._jurisdiction),
            source: r2BucketSippySourceToTerraform(this._source.internalValue),
        };
    }
    synthesizeHclAttributes() {
        const attrs = {
            account_id: {
                value: cdktf.stringToHclTerraform(this._accountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bucket_name: {
                value: cdktf.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination: {
                value: r2BucketSippyDestinationToHclTerraform(this._destination.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "R2BucketSippyDestination",
            },
            jurisdiction: {
                value: cdktf.stringToHclTerraform(this._jurisdiction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: r2BucketSippySourceToHclTerraform(this._source.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "R2BucketSippySource",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
