function displayEnvironmental() {
    var environmentalDiv= $("<div id='environmentalinfo'>");
    var evironmental1 = $("<p id='evironmentalp1'>").text("Maximizes Use of Renewable Energy");
    environmentalDiv.append(evironmental1);
    var evironmental2 = $("<p id='evironmentalp2'>").text("Regulates Greenhouse Gas Emissions");
    environmentalDiv.append(evironmental2); 
    var evironmental3 = $("<p id='evironmentalp3'>").text("Uses Local Products and Resources");
    environmentalDiv.append(evironmental3); 
    $('#environmentalinfo').remove();
    $('#socialinfo').remove();
    $('#governanceinfo').remove();
    $("#emptyEnvironmental").append(environmentalDiv);
}

function displaySocial() {
    var socialDiv= $("<div id='socialinfo'>");
    var social1 = $("<p id='socialp1'>").text("Maximizes Use of Renewable Energy");
    socialDiv.append(social1);
    var social2 = $("<p id='socialp2'>").text("Regulates Greenhouse Gas Emissions");
    socialDiv.append(social2); 
    var social3 = $("<p id='socialp3'>").text("Uses Local Products and Resources");
    socialDiv.append(social3); 
    $('#socialinfo').remove();
    $('#environmentalinfo').remove();
    $('#governanceinfo').remove();
    $("#emptySocial").append(socialDiv);
}

function displayGovernance() {
    var governanceDiv= $("<div id='governanceinfo'>");
    var governance1 = $("<p id='governancep1'>").text("Board Diversity");
    governanceDiv.append(governance1);
    var governance2 = $("<p id='governancep2'>").text("No Pay Discrimination and Promotes Equal Opportunity Policies");
    governanceDiv.append(governance2); 
    var governance3 = $("<p id='governancep3'>").text("Pays a Fair and Living Wage");
    governanceDiv.append(governance3); 
    $('#governanceinfo').remove();
    $('#socialinfo').remove();
    $('#environmentalinfo').remove();
    $("#emptyGovernance").append(governanceDiv);
}
$(document).on("click", "#environmentalButton", displayEnvironmental);
$(document).on("click", "#socialButton", displaySocial);
$(document).on("click", "#governanceButton", displayGovernance);