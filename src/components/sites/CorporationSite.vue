<template>
  <div>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td bgcolor="#FFFFFF" valign="TOP" width="250" rowspan="2">
          <a href=""
            ><img src="../../assets/enterprise/enterprise-logo.gif" border="0"
          /></a>
        </td>
        <td bgcolor="#FFFFFF" valign="TOP" height="20" width="19" align="RIGHT">
          <img src="../../assets/enterprise/curve.gif" />
        </td>
        <td
          bgcolor="#000000"
          valign="MIDDLE"
          height="20"
          align="RIGHT"
          nowrap=""
          colspan="2"
        >
          <font color="#FFFFFF" face="Verdana, Arial, Helvetica" size="1">
            &nbsp;&nbsp;<a
              style="color:#FFFFFF;text-decoration:none;"
              href=""
              target="_top"
              ><font color="#FFFFFF">Enterprise Product Catalog</font></a
            >&nbsp;&nbsp;<font color="#FFFFFF">|</font> &nbsp;&nbsp;<a
              style="color:#FFFFFF;text-decoration:none;"
              href=""
              target="_top"
              ><font color="#FFFFFF">Contact Assistance</font></a
            >&nbsp;&nbsp;<font color="#FFFFFF">|</font> &nbsp;&nbsp;<a
              style="color:#FFFFFF;text-decoration:none;"
              href=""
              target="_top"
              ><font color="#FFFFFF">Corporation Guide</font></a
            >&nbsp;&nbsp;
          </font>
        </td>
      </tr>
      <tr>
        <td bgcolor="#FFFFFF" valign="TOP" height="40" width="19"></td>
        <td bgcolor="#FFFFFF" valign="TOP" height="40" width="200"></td>
        <td
          bgcolor="#FFFFFF"
          valign="TOP"
          height="40"
          width="112"
          align="RIGHT"
        >
          <a href=""
            ><img src="../../assets/enterprise/corporation-logo.gif" border="0"
          /></a>
        </td>
      </tr>
      <tr>
        <td bgcolor="#000000" valign="MIDDLE" height="20" colspan="4" nowrap="">
          <font color="#FFFFFF" face="Verdana, Arial, Helvetica" size="1">
            <b>
              &nbsp;&nbsp;<a
                style="color:#FFFFFF;text-decoration:none;"
                href=""
                target="_top"
                ><font color="#FFFFFF">Enterprise Front Page</font></a
              >&nbsp;&nbsp;<font color="#FFFFFF">|</font>&nbsp;&nbsp;<a
                style="color:#FFFFFF;text-decoration:none;"
                href=""
                target="_top"
                ><font color="#FFFFFF">Corporation Enterprise SKUs</font></a
              >&nbsp;&nbsp;<font color="#FFFFFF">|</font>&nbsp;&nbsp;<a
                style="color:#FFFFFF;text-decoration:none;"
                href=""
                target="_top"
                ><font color="#FFFFFF">Commonly Inquired Requests</font></a
              >&nbsp;&nbsp;<font color="#FFFFFF">|</font>&nbsp;&nbsp;<a
                style="color:#FFFFFF;text-decoration:none;"
                href=""
                target="_top"
                ><font color="#FFFFFF">Worldwide Service</font></a
              >&nbsp;&nbsp;<font color="#FFFFFF">|</font>
            </b>
          </font>
        </td>
      </tr>
    </table>

    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="160" align="CENTER" valign="top" bgcolor="lightgray">
          <img src="../../assets/enterprise/computer.png" />
          <p>"It really whips the computer running!"</p>
        </td>
        <td style="padding:10px;" valign="top" rowspan="3">
          <h2>Synergy for team players</h2>
          <img src="../../assets/enterprise/business-vote.png" />
          <img src="../../assets/enterprise/chip.png" />
          <img src="../../assets/enterprise/clock.png" />
          <img src="../../assets/enterprise/color-squares.png" />
          <img src="../../assets/enterprise/floppy.png" />
        </td>
        <td style="padding:10px;" valign="top" rowspan="3">
          <h2>Amazing value!</h2>
          <img src="../../assets/enterprise/laptop.png" />
          <img src="../../assets/enterprise/lightbulb.png" />
          <img src="../../assets/enterprise/office-building.png" />
          <img src="../../assets/enterprise/schoolbus.png" />
          <img src="../../assets/enterprise/thumbs-up.png" />
        </td>
      </tr>
      <tr>
        <td valign="top" bgcolor="lightgray">
          <ul style="font-size:12px;">
            <li>
              <a href="#">Order Corporation Enterprise 1999 Online</a>
            </li>
            <li>
              <a href="#">Enterprise Tour</a>
            </li>
          </ul>
        </td>
      </tr>
      <tr>
        <td rowspan="2" align="CENTER" valign="top" bgcolor="lightgray">
          <img src="../../assets/browser-bar-animated.gif" />
        </td>
      </tr>
      <tr>
        <td align="CENTER" colspan="4">
          <hr width="100%" height="1" vspace="10" />
          <font face="Arial" size="1"
            ><a href=""
              >© 1999 Corporation. All rights reserved. Terms of use.</a
            >
            <p></p
          ></font>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    address: String,
    status: String
  },
  mounted() {
    this.$parent.$emit("page-loaded", {
      title: "Corporation Enterprise - Web Voyager",
      address: "http://corporation.com/enterprise",
      status: "Ready."
    });
  }
};
</script>

<style lang="sass" scoped>
img
  margin-bottom: -4px
</style>
