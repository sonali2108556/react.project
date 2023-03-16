import React from "react";

function forminformation(props) {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="form-border col-12 col-sm-6">
                    <div class="form-box">

                        <div class="form-group">
                            <div class="main">
                                <label for="exampleInputEmail1">Personal information</label>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control myinput" placeholder="First name"/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control myinput" placeholder="Last name"/>
                                </div>

                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control myinput" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Email* "/>
                        </div>
                        <div class="form-group">
                            <input type="phone" class="form-control myinput" id="exampleInputphone"
                                aria-describedby="phoneHelp" placeholder="Phone* "/>
                        </div>
                        <div class="form-group">
                            <input type="college" class="form-control myinput" id="exampleInputcollege"
                                aria-describedby="collegeHelp" placeholder="College/University* "/>
                        </div>
                        <div class="form-group">
                            <input type="branch" class="form-control myinput" id="exampleInputbranch"
                                aria-describedby="branchHelp" placeholder=" Branch/Stream/Course* "/>
                        </div>
                        <div class="form-group">
                            <input type="percentage" class="form-control myinput" id="exampleInputpercentage"
                                aria-describedby="percentageHelp" placeholder="CGPI/Percentage* "/>
                        </div>
                        <div class="form-group">
                            <input type="session" class="form-control myinput" id="exampleInputsession"
                                aria-describedby="sessionHelp" placeholder="Select Session* "/>
                        </div>
                        <div class="form-group">
                            <input type="link" class="form-control myinput" id="exampleInputlink"
                                placeholder="Link(GitHub, Portfolio,etc...)* "/>
                        </div>
                    </div>

                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Billing Address</label>
                        </div>
                        <div class="form-group">
                            <input class="form-control myinput" type="text" placeholder="Name*"/>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control myinput" placeholder="Email*"/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control myinput" placeholder="Phone*"/>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <input type="session" class="form-control myinput" id="exampleInputsession"
                                aria-describedby="sessionHelp" placeholder="Address Line 1* "/>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control myinput" placeholder="City*"/>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control myinput" placeholder="State*"/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="form-control myinput" type="text" placeholder="PIN Code*"/>
                        </div>
                        <div class="form-row">
                            <button type="button" class="button-form btn btn-outline-danger btn-lg ml-auto"
                                data-dismiss="modal">Cancel</button>
                            <button type="button" class="button-group btn btn-success btn-lg ml-4">Save</button>
                        </div>
                    </form>
                </div>


            </div>
            <div class=" row-header col-12 col-sm-6">
                <div class="button-text">
                    <button type="button" class="btn btn-outline-primary print-text">Print Invoice</button>
                </div>
            </div>
        </div>
    )
}
export default forminformation;