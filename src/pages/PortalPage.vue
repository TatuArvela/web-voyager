<template>
  <table width="800px" border="1">
    <tbody>
      <tr>
        <td width="150px" cellpadding="20" align="center" rowspan="5">
          <img src="../assets/portal/portal-logo.gif" border="0" />
          <font face="Times New Roman">
            <i>"Best of the Web"</i>
          </font>
          <br />
          <br />
          <a href="#" @click.prevent="openRandomPage()">
            <img src="../assets/portal/find.gif" border="0" />
          </a>
          <br />
          <br />
          <a href="#" @click.prevent="openRandomPage()">
            <b>Download Portal Toolbar</b>
          </a>
          <br />
          <br />
          <hr />
          <a href="#" @click.prevent="openRandomPage()">Take Portal Tour</a>
          <br />
          <br />
          <a href="#" @click.prevent="openRandomPage()">Portal TV</a>
          <br />
          <br />
          <br />
          <img
            style="margin-bottom:-5px;"
            src="../assets/browser-bar-animated.gif"
          />
          <br />
          <br />
        </td>
        <td align="center" bgcolor="blue">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="yellow">News</font>
          </a>
        </td>
        <td align="center" bgcolor="lightgreen">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="blue">Sports</font>
          </a>
        </td>
        <td align="center" bgcolor="yellow">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="green">Finance</font>
          </a>
        </td>
        <td align="center" bgcolor="red">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="white">Entertainment</font>
          </a>
        </td>
        <td align="center" bgcolor="gray">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="lightgreen">Games</font>
          </a>
        </td>
        <td align="center" bgcolor="purple">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="yellow">Kids</font>
          </a>
        </td>
        <td align="center" bgcolor="cyan">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="orange">Lifestyle</font>
          </a>
        </td>
        <td align="center" bgcolor="lavender">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="burntsienna">eShopping</font>
          </a>
        </td>
        <td align="center" bgcolor="orange">
          <a href="#" @click.prevent="openRandomPage()">
            <font color="white">eMail</font>
          </a>
        </td>
      </tr>
      <tr>
        <td colspan="3" align="right">
          New to the Internet?
          <br />
          <a href="#" @click.prevent="openRandomPage()">
            <b>Click here</b>
          </a>
        </td>
        <td colspan="3" align="center">
          <a href="#" @click.prevent="openRandomPage()">
            <font face="Times New Roman">
              <b>Portal Online Search</b>
            </font>
          </a>
          <br />
          <input type="text" />
          <input type="button" value="Search" />
        </td>
        <td colspan="3" align="left">
          <a href="#" @click.prevent="openRandomPage()">
            <img
              src="../assets/portal/membership.png"
              width="191px"
              height="47px"
              border="0"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td colspan="9" align="center">
          <img src="../assets/portal/internet.gif" border="0" />
        </td>
      </tr>
      <tr>
        <td colspan="3" style="padding: 6px;">
          <h2>
            <font face="Times New Roman">Navigating the WWW</font>
          </h2>
          <font face="Times New Roman">
            It's a maze out there
            <br />
            <br />Ask any WWW newbie, ask any experienced Web surfer, ask any
            Web site developer "what are the biggest problems with Web sites?"
            and chances are "navigation" will rank in their top 3.
          </font>
        </td>
        <td colspan="3">
          <ul>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Arts</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Business</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Computing</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Education</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Entertainment</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Health</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Hobbies</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Life &amp; Style</a>
            </li>
          </ul>
        </td>
        <td colspan="3">
          <ul>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Money</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()"
                >News &amp; Reference</a
              >
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Personal Pages</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()"
                >Politics &amp; Law</a
              >
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Regional</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Science</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Shopping</a>
            </li>
            <li>
              <a href="#" @click.prevent="openRandomPage()">Sports</a>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { randomString } from "../utils";
const addressStrings = [
  "business",
  "center",
  "city",
  "com",
  "dial-up",
  "dotcom",
  "electronic",
  "email",
  "enjoy",
  "entertainment",
  "explore",
  "find",
  "games",
  "hobbies",
  "http",
  "internet",
  "lifestyle",
  "live",
  "mail",
  "net",
  "online",
  "personal",
  "portal",
  "regional",
  "science",
  "search",
  "shopping",
  "surf",
  "tour",
  "voyage",
  "www",
  "your"
];

export default {
  props: {
    title: String,
    address: String,
    status: String
  },
  mounted() {
    const title = `${randomString([
      "Portal Online | Greatest of the Web",
      "Portal Online | Best of the Web",
      "Welcome to Portal Online",
      "Portal Online - The Internet's Frontpage"
    ])} - Web Voyager`;
    const address = `${randomString(addressStrings)}://${randomString(
      addressStrings
    )}.${randomString(addressStrings)}.${randomString(addressStrings)}`;
    this.$emit("loadPage", {
      title: title,
      address: address
    });
  },
  methods: {
    openRandomPage() {
      this.$emit("openRandomPage");
    }
  }
};
</script>
