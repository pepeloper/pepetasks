//
// Main javascript
//
// Initialize plugins

//
// Table of content:
//
// 1. Sidebar
// 2. Switches
// 3. Toggles
// 4. Todo Tasks
// 5. Boards (dragula plugin)
// 6. Select (select2 plugin)
// 7. File Upload (dropzone plugin)
// 8. Sortable Table (dataTable plugin)
// 9. Date Picker (datepicker plugin)
// 10. Map (jqvmap plugin)

//
// Note: Bootstrap plugins is enabled via data attributes
//

// A fix to initialise dropzone on document ready
Dropzone.autoDiscover = false;

$(function() {
    "use strict";


    // Initialize 
    
    Sidebar(); // 1. Sidebar
    Switch();  // 2. Switches
    Toggle();  // 3. Toggles
    Todo();    // 4. Todo

    // 5. Boards 
    if($('.c-board').length) {
        var dragulaObj = dragula( $('.c-board__content').toArray(), {});
    }

    // 6. Select
    if($('.c-select').length) {
        var $singleSelect = $('.c-select'),
            $singleSelectHasSearch = $('.c-select.has-search'),
            $multipleSelect = $('.c-select.c-select--multiple'),
            $disabledSelect = $('.c-select.is-disabled');

        $singleSelect.select2({
            width: '100%',
            minimumResultsForSearch: Infinity // disable search
        });

        // single select with search enabled
        $singleSelectHasSearch.select2({
            width: '100%' 
        });

        // multiple select
        $multipleSelect.select2({
            width: '100%',
            multiple: true
        });

        // disabled select
        $disabledSelect.select2({
            width: '100%',
            disabled: true
        });
    }

    // 7. dropzone
    if($('.dropzone').length) {
        $("#custom-dropzone").dropzone();
    }

    // 8. datatable
    if($('#datatable').length) {
        $("#datatable").DataTable({
            searching: false,
            "lengthChange": false, 
            "order": [], // disable ordering on init
            "ordering": true,
            columnDefs: [{
              orderable: false,
              targets: "no-sort"
            }]
        });
    }

    $.fn.datepicker.languages['es-ES'] = {
        format: 'dd/mm/yyyy',
        days: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
        daysShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'],
        daysMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
        weekStart: 1,
        months: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthsShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    };

    // 9. datepicker
    if($('[data-toggle="datepicker"]').length) {
        $('[data-toggle="datepicker"]').datepicker({
            language: 'es-ES'
        });
    }

    // 10. Map
    if($('#vmap').length){
        var escapeXml = function (string) {
            return string.replace(/[<>]/g, function (c) {
                switch (c) {
                    case '<': return '\u003c';
                    case '>': return '\u003e';
                }
            });
        }

        var pins = { 
          us: escapeXml('<i class="fa fa-map-marker u-color-success"></i>'),
          au: escapeXml('<i class="fa fa-map-marker u-color-danger"></i>'),
          fr: escapeXml('<i class="fa fa-map-marker u-color-warning"></i>'),
          br: escapeXml('<i class="fa fa-map-marker u-color-info"></i>'),
          cn: escapeXml('<i class="fa fa-map-marker u-color-info"></i>'),
          th: escapeXml('<i class="fa fa-map-marker u-color-primary"></i>')
        };

        jQuery('#vmap').vectorMap({
            map: 'world_en',
            mode: 'svg',
            backgroundColor: null,
            color: '#eff3f6',
            hoverOpacity: 1,
            borderColor: '#eff3f6',
            hoverColor: '#d7dfe6',
            selectedColor: '#d7dfe6',
            enableZoom: false,
            showTooltip: true,
            selectedRegions: ['US', 'AU', 'FR', 'BR', 'CN', 'TH'],
            pins: pins,
            pinMode: 'content',
            scaleColors: ['#eff3f6', '#d7dfe6'],
            normalizeFunction: 'polynomial'
        });
    }
}); 
