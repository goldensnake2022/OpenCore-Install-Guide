(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{375:function(e,t,a){e.exports=a.p+"assets/img/com-recovery.805dc41f.png"},376:function(e,t,a){e.exports=a.p+"assets/img/base-oc-folder.9a1a058a.png"},377:function(e,t,a){e.exports=a.p+"assets/img/com-efi-done.a6fb730e.png"},530:function(e,t,a){e.exports=a.p+"assets/img/file-path.0aea4278.png"},531:function(e,t,a){e.exports=a.p+"assets/img/command-prompt.53392eba.png"},532:function(e,t,a){e.exports=a.p+"assets/img/macrecovery-done.1b0960bc.png"},533:function(e,t,a){e.exports=a.p+"assets/img/basesystem-example.93778929.png"},534:function(e,t,a){e.exports=a.p+"assets/img/macrecovery-after.4c24ba88.jpg"},535:function(e,t,a){e.exports=a.p+"assets/img/DiskManagement.aac12f25.jpg"},536:function(e,t,a){e.exports=a.p+"assets/img/bootice.f83b0859.png"},537:function(e,t,a){e.exports=a.p+"assets/img/restore-mbr.8e5164a9.png"},538:function(e,t,a){e.exports=a.p+"assets/img/restore-mbr-file.a0daa24a.png"},539:function(e,t,a){e.exports=a.p+"assets/img/restore-pbr.2635de6c.png"},540:function(e,t,a){e.exports=a.p+"assets/img/restore-pbr-file.cbf5dcf4.png"},541:function(e,t,a){e.exports=a.p+"assets/img/final-boot-file.a45bcbb9.png"},638:function(e,t,a){"use strict";a.r(t);var o=a(25),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"making-the-installer-in-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer-in-windows"}},[e._v("#")]),e._v(" Making the installer in Windows")]),e._v(" "),o("ul",[o("li",[e._v("Supported version: 0.6.3")])]),e._v(" "),o("p",[e._v("While you don't need a fresh install of macOS to use OpenCore, some users prefer having a fresh slate with their boot manager upgrades.")]),e._v(" "),o("p",[e._v("To start you'll need the following:")]),e._v(" "),o("ul",[o("li",[e._v("4GB USB Stick")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("macrecovery.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("This will require "),o("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python installed"),o("OutboundLink")],1)])])])]),e._v(" "),o("h2",{attrs:{id:"downloading-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#downloading-macos"}},[e._v("#")]),e._v(" Downloading macOS")]),e._v(" "),o("p",[e._v("To grab legacy installers is super easy, first grab a copy of "),o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),o("OutboundLink")],1),e._v(" and head to "),o("code",[e._v("/Utilities/macrecovery/")]),e._v(". Next copy the folder path for the macrecovery folder:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(530),alt:""}})]),e._v(" "),o("p",[e._v("From here, you'll want to open up a Command Prompt and cd into the macrecovery folder that we copied earlier:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" Paste_Folder_Path\n")])])]),o("p",[o("img",{attrs:{src:a(531),alt:""}})]),e._v(" "),o("p",[e._v("Now run one of the following depending on what version of macOS you want(Note these scripts rely on "),o("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python"),o("OutboundLink")],1),e._v(" support, please install if you haven't already):")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lion(10.7):")]),e._v("\nmacrecovery.py -b Mac-2E6FAB96566FE58C -m 00000000000F25Y00 download\nmacrecovery.py -b Mac-C3EC7CD22292981F -m 00000000000F0HM00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mountain Lion(10.8):")]),e._v("\nmacrecovery.py -b Mac-7DF2A3B5E5D671ED -m 00000000000F65100 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mavericks(10.9):")]),e._v("\nmacrecovery.py -b Mac-F60DEB81FF30ACF6 -m 00000000000FNN100 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Yosemite(10.10):")]),e._v("\nmacrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000GDVW00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# El Capitan(10.11):")]),e._v("\nmacrecovery.py -b Mac-FFE5EF870D7BA81A -m 00000000000GQRX00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sierra(10.12):")]),e._v("\nmacrecovery.py -b Mac-77F17D7DA9285301 -m 00000000000J0DX00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# High Sierra(10.13)")]),e._v("\nmacrecovery.py -b Mac-7BA5B2D9E42DDD94 -m 00000000000J80300 download\nmacrecovery.py -b Mac-BE088AF8C5EB4FA2 -m 00000000000J80300 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mojave(10.14)")]),e._v("\nmacrecovery.py -b Mac-7BA5B2DFE22DDD8C -m 00000000000KXPG00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Catalina(10.15)")]),e._v("\nmacrecovery.py -b Mac-27AD2F918AE68F61 -m 00000000000K7GF00 download\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Latest version")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ie. Big Sur(11)")]),e._v("\nmacrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 -os latest download\n")])])]),o("p",[e._v("This will take some time, however once you're finished you should get either BaseSystem or RecoveryImage files:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(532),alt:""}})]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("BaseSystem")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("RecoveryImage")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(533),alt:""}})]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(534),alt:""}})])])])]),e._v(" "),o("p",[e._v("Now with our installer downloaded, we'll next want to format out USB.")]),e._v(" "),o("h2",{attrs:{id:"making-the-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#making-the-installer"}},[e._v("#")]),e._v(" Making the installer")]),e._v(" "),o("p",[e._v("Here we'll be formatting our USB and adding macOS onto it, we have 2 options:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#disk-management-method"}},[e._v("Disk Management method")]),e._v(" "),o("ul",[o("li",[e._v("GUI Based, simplest way")]),e._v(" "),o("li",[e._v("Only UEFI systems are supported(ex. 2012+)")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#diskpart-method"}},[e._v("diskpart method")]),e._v(" "),o("ul",[o("li",[e._v("Command line based, little more work")]),e._v(" "),o("li",[e._v("Required for legacy systems(ie. non-UEFI, pre-2012)")])])])]),e._v(" "),o("h3",{attrs:{id:"disk-management-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disk-management-method"}},[e._v("#")]),e._v(" Disk Management method")]),e._v(" "),o("p",[e._v("Simply open up Disk Management, and format your USB as FAT32:")]),e._v(" "),o("ol",[o("li",[e._v("Right click the Start Button on your task bar and select Disk Management.")]),e._v(" "),o("li",[e._v("You should see all of your partitions and disks. On the bottom half, you'll see your devices. Find your USB.")]),e._v(" "),o("li",[e._v("You'll want to format the USB to have a FAT32 partition.")])]),e._v(" "),o("ul",[o("li",[e._v("If you have multiple partitions on the USB, right click each partition and click Delete Volume for your USB (This will remove data, make sure you have backups and only remove partitions from your USB)\n"),o("ul",[o("li",[e._v('Right click the unallocated space and create a new simple volume. Make sure it is FAT32 and at least a gigabyte or two big. Name it "EFI".')])])]),e._v(" "),o("li",[e._v("Otherwise, right click the partition on the USB and click Format and set it to FAT32.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(535),alt:""}})]),e._v(" "),o("p",[e._v("Next, go to the root of this USB drive and create a folder called "),o("code",[e._v("com.apple.recovery.boot")]),e._v(". Then move the downloaded BaseSystem or RecoveryImage files. Please ensure you copy over both the .dmg and .chunklist files to this folder:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(375),alt:""}})]),e._v(" "),o("p",[e._v("Now grab OpenCorePkg you downloaded earlier and open it:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(376),alt:""}})]),e._v(" "),o("p",[e._v("Here we see both IA32(32 Bit CPUs) and X64(64 Bit CPUs) folders, choose the one that's most appropriate to your hardware and open it. Next grab the EFI folder inside and place this on the root of the USB drive along side com.apple.recovery.boot. Once done it should look like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(377),alt:""}})]),e._v(" "),o("h3",{attrs:{id:"diskpart-method"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#diskpart-method"}},[e._v("#")]),e._v(" diskpart method")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("diskpart method")]),e._v(" "),o("p",[e._v("Press Windows + R and enter "),o("code",[e._v("diskpart")]),e._v(".")]),e._v(" "),o("p",[e._v("Now run the following:")]),e._v(" "),o("div",{staticClass:"language-sh extra-class"},[o("pre",{pre:!0,attrs:{class:"language-sh"}},[o("code",[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List available disks")]),e._v("\nlist disk\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Select your disk(ie. disk 1)")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" disk "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Format the drive")]),e._v("\nclean\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Convert to GPT")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Due to an odd bug with BOOTICE and DuetPkg, MBR disks will fail to boot")]),e._v("\nconvert gpt\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create a new partition")]),e._v("\ncreate partition primary\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Select your partition")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Running clean ensures we only have 1 partition so it will be "partition 1"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" partition "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Format the drive as FAT32")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("format")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("fs")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("fat32 quick\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Assign a drive letter(ie. Drive E, ensure it's not currently in use)")]),e._v("\nASSIGN "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("LETTER")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("E\n")])])]),o("p",[e._v("Next, go to the root of this USB drive and create a folder called "),o("code",[e._v("com.apple.recovery.boot")]),e._v(". Then move the downloaded BaseSystem or RecoveryImage files. Please ensure you copy over both the .dmg and .chunklist files to this folder:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(375),alt:""}})]),e._v(" "),o("p",[e._v("Now grab OpenCorePkg you downloaded earlier and open it:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(376),alt:""}})]),e._v(" "),o("p",[e._v("Here we see both IA32(32 Bit CPUs) and X64(64 Bit CPUs) folders, choose the one that's most appropriate to your hardware and open it. Next grab the EFI folder inside and place this on the root of the USB drive along side com.apple.recovery.boot. Once done it should look like this:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(377),alt:""}})]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Legacy Install Setup")]),e._v(" "),o("p",[e._v("If your firmware does not support UEFI, see below instructions:")]),e._v(" "),o("p",[e._v("To start, you'll need the following:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.7-zip.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("7-Zip"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.majorgeeks.com/files/details/bootice_64_bit.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BOOTICE"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),o("OutboundLink")],1)])]),e._v(" "),o("p",[e._v("Next, open up BOOTICE and ensure you've selected the right drive.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(536),alt:""}})]),e._v(" "),o("p",[e._v('Next, enter "Process MBR" then select "Restore MBR" and select the '),o("strong",[e._v("boot0")]),e._v(" file from "),o("code",[e._v("Utilities/LegacyBoot/")]),e._v(" in OpenCorePkg:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Restore MBR")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Restore boot0 file")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(537),alt:""}})]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(538),alt:""}})])])])]),e._v(" "),o("p",[e._v('Then head back to the main screen and select "Process PBR" then "Restore PBR". From here, choose the '),o("strong",[e._v("Boot1f32")]),e._v(" file from "),o("code",[e._v("Utilities/LegacyBoot/")]),e._v(" in OpenCorePkg:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[e._v("Restore PBR")]),e._v(" "),o("th",{staticStyle:{"text-align":"left"}},[e._v("Restore boot1f32 file")])])]),e._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(539),alt:""}})]),e._v(" "),o("td",{staticStyle:{"text-align":"left"}},[o("img",{attrs:{src:a(540),alt:""}})])])])]),e._v(" "),o("p",[e._v("Once this is done, head back to your USB and do 1 final thing. Grab either the "),o("strong",[e._v("bootx64")]),e._v("(64 Bit CPUs) or "),o("strong",[e._v("bootia32")]),e._v("(32 Bit CPUs) file from "),o("code",[e._v("Utilities/LegacyBoot/")]),e._v(" and place it on the root of your drive. "),o("strong",[e._v("Rename this file to boot")]),e._v(" to ensure DuetPkg can properly:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(541),alt:""}})])])]),e._v(" "),o("h2",{attrs:{id:"now-with-all-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#now-with-all-this-done-head-to-setting-up-the-efi-to-finish-up-your-work"}},[e._v("#")]),e._v(" Now with all this done, head to "),o("RouterLink",{attrs:{to:"/installer-guide/opencore-efi.html"}},[e._v("Setting up the EFI")]),e._v(" to finish up your work")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);