<template>
  <table
    width="100%"
    style="height: 100%;"
    cellpadding="10"
    cellspacing="0"
    border="0"
  >
    <tr>
      <td colspan="2" style="height: 100px;">
        <h1>Website Logo</h1>
      </td>
    </tr>
    <tr>
      <td colspan="2" valign="middle" height="30" bgcolor="lightblue">
        <a href="#">Home</a>
      </td>
    </tr>
    <tr>
      <td width="20%" valign="top" bgcolor="lightblue">
        <a href="#">Menu link</a>
        <br />
        <a href="#">Menu link</a>
        <br />
        <a href="#">Menu link</a>
        <br />
        <a href="#">Menu link</a>
        <br />
        <a href="#">Menu link</a>
      </td>
      <td width="80%" valign="top">
        <h2>Page heading</h2>
        Here's a two column layout with header, navigation bar and footer
        sections. The first two table rows create the header and the navigation
        bar and contain a single table cell each. These table cells use the
        colspan="2" attribute-value pair.
        <br />
        <br />The third table row contains two table cells which create the menu
        column (left) and the content column (right). The colspan attribute is
        not set in either so they default to colspan="1".
        <br />
        <br />The fourth table row creates the footer. Like the header and the
        navigation bar, it contains a single table cell which uses the
        colspan="2" attribute-value pair.
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center" height="20" bgcolor="lightblue">
        Copyright ©
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    title: String,
    address: String,
    status: String
  },
  mounted() {
    this.$emit("page-loaded", {
      title: "Internet Frontpage - Web Voyager",
      address: "http://internet-frontpage.com",
      status: "Ready."
    });
  }
};
</script>
