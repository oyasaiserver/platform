// https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains
// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataCloudflareRegistrarDomainsResultRegistrantContactToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareRegistrarDomainsResultRegistrantContactToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // address2 - computed: true, optional: false, required: false
    get address2() {
        return this.getStringAttribute('address2');
    }
    // city - computed: true, optional: false, required: false
    get city() {
        return this.getStringAttribute('city');
    }
    // country - computed: true, optional: false, required: false
    get country() {
        return this.getStringAttribute('country');
    }
    // email - computed: true, optional: false, required: false
    get email() {
        return this.getStringAttribute('email');
    }
    // fax - computed: true, optional: false, required: false
    get fax() {
        return this.getStringAttribute('fax');
    }
    // first_name - computed: true, optional: false, required: false
    get firstName() {
        return this.getStringAttribute('first_name');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // last_name - computed: true, optional: false, required: false
    get lastName() {
        return this.getStringAttribute('last_name');
    }
    // organization - computed: true, optional: false, required: false
    get organization() {
        return this.getStringAttribute('organization');
    }
    // phone - computed: true, optional: false, required: false
    get phone() {
        return this.getStringAttribute('phone');
    }
    // state - computed: true, optional: false, required: false
    get state() {
        return this.getStringAttribute('state');
    }
    // zip - computed: true, optional: false, required: false
    get zip() {
        return this.getStringAttribute('zip');
    }
}
export function dataCloudflareRegistrarDomainsResultTransferInToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareRegistrarDomainsResultTransferInToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareRegistrarDomainsResultTransferInOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource, terraformAttribute) {
        super(terraformResource, terraformAttribute, false);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // accept_foa - computed: true, optional: false, required: false
    get acceptFoa() {
        return this.getStringAttribute('accept_foa');
    }
    // approve_transfer - computed: true, optional: false, required: false
    get approveTransfer() {
        return this.getStringAttribute('approve_transfer');
    }
    // can_cancel_transfer - computed: true, optional: false, required: false
    get canCancelTransfer() {
        return this.getBooleanAttribute('can_cancel_transfer');
    }
    // disable_privacy - computed: true, optional: false, required: false
    get disablePrivacy() {
        return this.getStringAttribute('disable_privacy');
    }
    // enter_auth_code - computed: true, optional: false, required: false
    get enterAuthCode() {
        return this.getStringAttribute('enter_auth_code');
    }
    // unlock_domain - computed: true, optional: false, required: false
    get unlockDomain() {
        return this.getStringAttribute('unlock_domain');
    }
}
export function dataCloudflareRegistrarDomainsResultToTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export function dataCloudflareRegistrarDomainsResultToHclTerraform(struct) {
    if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    const attrs = {};
    return attrs;
}
export class DataCloudflareRegistrarDomainsResultOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, complexObjectIndex, complexObjectIsFromSet) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
    // available - computed: true, optional: false, required: false
    get available() {
        return this.getBooleanAttribute('available');
    }
    // can_register - computed: true, optional: false, required: false
    get canRegister() {
        return this.getBooleanAttribute('can_register');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // current_registrar - computed: true, optional: false, required: false
    get currentRegistrar() {
        return this.getStringAttribute('current_registrar');
    }
    // expires_at - computed: true, optional: false, required: false
    get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // locked - computed: true, optional: false, required: false
    get locked() {
        return this.getBooleanAttribute('locked');
    }
    // registrant_contact - computed: true, optional: false, required: false
    _registrantContact = new DataCloudflareRegistrarDomainsResultRegistrantContactOutputReference(this, "registrant_contact");
    get registrantContact() {
        return this._registrantContact;
    }
    // registry_statuses - computed: true, optional: false, required: false
    get registryStatuses() {
        return this.getStringAttribute('registry_statuses');
    }
    // supported_tld - computed: true, optional: false, required: false
    get supportedTld() {
        return this.getBooleanAttribute('supported_tld');
    }
    // transfer_in - computed: true, optional: false, required: false
    _transferIn = new DataCloudflareRegistrarDomainsResultTransferInOutputReference(this, "transfer_in");
    get transferIn() {
        return this._transferIn;
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
}
export class DataCloudflareRegistrarDomainsResultList extends cdktf.ComplexList {
    terraformResource;
    terraformAttribute;
    wrapsSet;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource, terraformAttribute, wrapsSet) {
        super(terraformResource, terraformAttribute, wrapsSet);
        this.terraformResource = terraformResource;
        this.terraformAttribute = terraformAttribute;
        this.wrapsSet = wrapsSet;
    }
    /**
    * @param index the index of the item to return
    */
    get(index) {
        return new DataCloudflareRegistrarDomainsResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains cloudflare_registrar_domains}
*/
export class DataCloudflareRegistrarDomains extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "cloudflare_registrar_domains";
    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTF code for importing a DataCloudflareRegistrarDomains resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataCloudflareRegistrarDomains to import
    * @param importFromId The id of the existing DataCloudflareRegistrarDomains that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataCloudflareRegistrarDomains to import is found
    */
    static generateConfigForImport(scope, importToId, importFromId, provider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_registrar_domains", importId: importFromId, provider });
    }
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.0/docs/data-sources/registrar_domains cloudflare_registrar_domains} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataCloudflareRegistrarDomainsConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'cloudflare_registrar_domains',
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
        this._maxItems = config.maxItems;
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
    // max_items - computed: false, optional: true, required: false
    _maxItems;
    get maxItems() {
        return this.getNumberAttribute('max_items');
    }
    set maxItems(value) {
        this._maxItems = value;
    }
    resetMaxItems() {
        this._maxItems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxItemsInput() {
        return this._maxItems;
    }
    // result - computed: true, optional: false, required: false
    _result = new DataCloudflareRegistrarDomainsResultList(this, "result", false);
    get result() {
        return this._result;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            max_items: cdktf.numberToTerraform(this._maxItems),
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
            max_items: {
                value: cdktf.numberToHclTerraform(this._maxItems),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };
        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
    }
}
