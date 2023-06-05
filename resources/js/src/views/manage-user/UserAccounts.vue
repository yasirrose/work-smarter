<template>
  <b-row>
    <b-col cols="12">
        <b-card-code>
          <b-link :to="{ path: 'create-user' }" class="custom-btn">Create a New User</b-link>
          <b-link :to="{ path: 'create-user' }" class="custom-btn">Start User Import Wizard</b-link>
            <!-- search input -->
            <div class="custom-search d-flex justify-content-end">
            <b-form-group>
                <div class="d-flex align-items-center">
                <label class="mr-1">Search</label>
                <b-form-input
                    v-model="searchTerm"
                    placeholder="Search"
                    type="text"
                    class="d-inline-block"
                />
                </div>
            </b-form-group>
            </div>

            <!-- table -->
            <vue-good-table
            :columns="columns"
            :rows="rows"
            :rtl="direction"
            :search-options="{
                enabled: true,
                externalQuery: searchTerm }"
            :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
            }"
            :pagination-options="{
                enabled: true,
                perPage:pageLength
            }"
            >
            <template
                slot="table-row"
                slot-scope="props"
            >

                <!-- Column: Name -->
                <span
                v-if="props.column.field === 'fullName'"
                class="text-nowrap"
                >
                <b-avatar
                    :src="props.row.avatar"
                    class="mx-1"
                />
                <span class="text-nowrap">{{ props.row.fullName }}</span>
                </span>

                <!-- Column: Status -->
                <span v-else-if="props.column.field === 'status'">
                <b-badge v-if="props.row.status === 0" :variant="statusVariant(props.row.status)">
                    Disabled
                </b-badge>
                <b-badge v-else-if="props.row.status === 1" :variant="statusVariant(props.row.status)">
                    Enabled
                </b-badge>
                </span>

                <!-- Column: Action -->
                <span v-else-if="props.column.field === 'action'">
                <span>
                    <b-dropdown
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                    >
                    <template v-slot:button-content>
                        <feather-icon
                        icon="MoreVerticalIcon"
                        size="16"
                        class="text-body align-middle mr-25"
                        />
                    </template>
                    <b-dropdown-item>
                        <feather-icon
                        icon="Edit2Icon"
                        class="mr-50"
                        />
                        <span>Edit</span>
                    </b-dropdown-item>
                    <b-dropdown-item>
                        <feather-icon
                        icon="TrashIcon"
                        class="mr-50"
                        />
                        <span>Delete</span>
                    </b-dropdown-item>
                    </b-dropdown>
                </span>
                </span>

                <!-- Column: Common -->
                <span v-else>
                {{ props.formattedRow[props.column.field] }}
                </span>
            </template>

            <!-- pagination -->
            <template slot="pagination-bottom" slot-scope="props">
                <div class="d-flex justify-content-between flex-wrap">
                <div class="d-flex align-items-center mb-0 mt-1">
                    <span class="text-nowrap ">
                    Showing 1 to
                    </span>
                    <b-form-select
                    v-model="pageLength"
                    :options="['3','5','10']"
                    class="mx-1"
                    @input="(value)=>props.perPageChanged({currentPerPage:value})"
                    />
                    <span class="text-nowrap"> of {{ props.total }} entries </span>
                </div>

                <div>
                    <b-pagination
                    :value="1"
                    :total-rows="props.total"
                    :per-page="pageLength"
                    first-number
                    last-number
                    align="right"
                    prev-class="prev-item"
                    next-class="next-item"
                    class="mt-1 mb-0"
                    @input="(value)=>props.pageChanged({currentPage:value})"
                    >
                    <template #prev-text>
                        <feather-icon
                        icon="ChevronLeftIcon"
                        size="18"
                        />
                    </template>
                    <template #next-text>
                        <feather-icon
                        icon="ChevronRightIcon"
                        size="18"
                        />
                    </template>
                    </b-pagination>
                </div>
                </div>
            </template>
            </vue-good-table>
        </b-card-code>
    </b-col>
  </b-row>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatar, BBadge, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem, BRow, BCol, BLink
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Admin from "../../../api/admin";

export default {
  components: {
    BCardCode,
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem, BRow, BCol, BLink
  },
  data() {
    return {
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: 'First Name',
          field: 'first_name',
        },
        {
          label: 'Last Name',
          field: 'last_name',
        },
        {
          label: 'Username',
          field: 'username',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Updated At',
          field: 'updated_at',
        },
        {
          label: 'Status',
          field: 'status',
        },
      ],
      rows: [],
      searchTerm: '',
      status: [{
        1: '1',
        2: '0',
      },
      {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info',
      }],
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        1      : 'light-primary',
        0     : 'light-danger',
      }

      return status => statusColor[status]
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  created() {
    this.getUsers();
  },
  methods :{
            getUsers(){
                Admin.getUsers(
                data => {
                    this.rows = data.data;
                },
                err => {
                    console.log(err);
                }
            );
        }
    }
}
</script>

<style lang="scss">
    @import '~@core/scss/vue/libs/vue-good-table.scss';
    .custom-btn {
          border-color: #7367f0!important;
          background-color: #7367f0!important;
          color: white;
          text-align: center;
          border: 1px solid transparent;
          padding: 0.786rem 1.5rem;
          border-radius: 0.358rem;
          cursor: pointer;
      }
    .custom-btn:hover{
      box-shadow: 0 8px 25px -8px #7367f0;
      color: white;
    }
</style>