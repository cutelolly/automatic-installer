function set_default_tooltips_main(){
    /**
     * Set tooltips on the main page
     */
    set_tooltip("password",  "Retrieval of Artifactory Encrypted Password Instructions:\n" +
    "1. Log into Artifactory (double click on artifactory drop down)\n" +
    "2. Click on your username (top right)\n" +
    "3. Enter your password to Unlock Artifactory Encrypted Password\n" +
    "4. Copy Artifactory Encrypted Password\n" +
    "[Note] Artifactory password is not valid for other artifactories.\n" +
     "Encrypted password will change anytime your SSO password changes.", true);

     set_tooltip("username",  "Ansys UserID");
     set_tooltip("artifactory",  "Select an artifactory and double click to open in Browser");

     set_tooltip("schedule-table-div",  "Click on a row to unschedule specific task");

}

function set_default_tooltips_settings(){
    /**
     * Set tooltips on the settings page
     */
    set_tooltip("force_install_label",
        "Not recommended to check. If checked will force install build of the same  date.\n" +
        "For example you have installed build of 20th of May and try to download" +
        "and install next day, application will identify that new build was not added" +
        "to artifactory and will skip the installation", true);

    set_tooltip("wb-flags-table-div", "Select product flags. Note: Will install all if none selected");

    set_tooltip("install_path",
        "Root path would be appended by:\n\\AnsysEM\\AnsysEMXX.X for EDT\nor \n\\ANSYS Inc\\vXXX for WB");

    set_tooltip("hpc-options-table-div", "Click on a row to remove options file")
}


function set_tooltip(id, text, align_left=false, place="bottom") {
    /**
     * Set tooltip for the HTML object
     * @param  {} id: id of the object
     * @param  {} text: tooltip text
     * @param  {} align_left=false: need to align text on the left?
     * @param  {} place="bottom": position of the tooltip
     */
    $("#" + id).tooltip({
                            title: text,
                            placement: place

                         })
                        .data('bs.tooltip')
                        .tip()
                        .addClass('default-tooltip')
                        //$("#" + id).tooltip("show");  // for debug

    if (align_left) {
        $("#" + id).data('bs.tooltip')
                    .tip()
                    .addClass("align-tooltip-left");
    }
}


var error_tooltip = function(prop_title) {
    /**
     * Set error tooltip (in red color). 
     * Show tooltip in specific title for 3.5s. After destroy and revert back default tooltips
     * @param  {} prop_title: tooltip message
     */
    this.tooltip('destroy');
    setTimeout(() => {this.tooltip({
                                title: prop_title,
                                placement: 'bottom'
                             }).tooltip('show');

    }, 150);
    this.attr('style', "border:#FF0000 2px solid;");

    setTimeout(() => {
        this.tooltip('destroy');
        this.attr('style', "border:#cccccc 1px solid;");
        setTimeout(() => {
            set_default_tooltips_main();
        }, 250);
    }, 3500);
}