/**
 * Mocking client-server processing
 */
import _blog from "./blog.json";
import _apartment from "./apartment.json";
import firebase from "../firebase";
const TIMEOUT = 100;
var feature = [];
export default {
  getBlog: (cb, timeout) => setTimeout(() => cb(_blog), timeout || TIMEOUT),
  getApartments: (cb, timeout) => {
    console.log("getApartments:", cb, _apartment);

    // const _apartment2 = getStories();
    //console.log("FFFFFFF", _apartment2);

    firebase
      .firestore()
      .collection("afrik_hub")
      .doc("feature")
      .collection("features")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          feature.push({
            title: doc.data().summaryEN,
            id: doc.id,
            date: "December 21, 2018",
            images: {
              thumbnail: doc.data().photo1,
              full:
                "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-1.jpg",
            },
            gallery: [
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-1.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-2.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-3.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-4.jpg",
              "https://demo2.wpopal.com/maisonco/wp-content/uploads/2018/12/property-5.jpg",
            ],
            content:
              "<p><strong>Introducing single apartment, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned</strong></p>\n<p>Sleek and sophisticated, MaisonCo offers qualities always coveted, but rarely obtained in the finest New York rental residences \u2013 a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>\n<h3>Delivering High Quality Projects</h3>\n<p>Staying calm, composed and maintaining strong self esteem in today\u2019s tough environment can be difficult but is not impossible if you follow a few simple guidelines. Here are 6 tips you can use as a starter guide to self improvement.</p>\n<p>Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your</p>\n<ul>\n<li><strong>Additional service including linen and room amenities as described above</strong></li>\n<li><strong>Same day laundry and valet service</strong></li>\n<li><strong>High-speed internet and WiFi access</strong></li>\n<li><strong>Private condominium reception desk</strong></li>\n<li><strong>Luxury furnishings</strong></li>\n<li><strong>Meeting rooms and catering facilities</strong></li>\n</ul>\n<p>Healthy self esteem originates in the environment found in the: family, school, peer group, work place, and community. There are certain characteristics of your environment that need to be present in order for self esteem to be fostered and grow.</p>\n<p>The main component of a healthy environment for self esteem is that it needs to be nurturing. It should provide unconditional warmth, love, and caring. It needs to provide the realization that other people are recognized as deserving to be nurtured, reinforced, rewarded, and bonded to.</p>\n",
            excerpt:
              "<p><strong>Introducing single apartment, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned</strong></p>\n<p>Sleek and sophisticated, MaisonCo offers qualities always coveted, but rarely obtained in the finest New York rental residences \u2013 a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>\n<h3>Delivering High Quality Projects</h3>\n<p>Staying calm, composed and maintaining strong self esteem in today\u2019s tough environment can be difficult but is not impossible if you follow a few simple guidelines. Here are 6 tips you can use as a starter guide to self improvement.</p>\n<p>Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your</p>\n<ul>\n<li><strong>Additional service including linen and room amenities as described above</strong></li>\n<li><strong>Same day laundry and valet service</strong></li>\n<li><strong>High-speed internet and WiFi access</strong></li>\n<li><strong>Private condominium reception desk</strong></li>\n<li><strong>Luxury furnishings</strong></li>\n<li><strong>Meeting rooms and catering facilities</strong></li>\n</ul>\n<p>Healthy self esteem originates in the environment found in the: family, school, peer group, work place, and community. There are certain characteristics of your environment that need to be present in order for self esteem to be fostered and grow.</p>\n<p>The main component of a healthy environment for self esteem is that it needs to be nurturing. It should provide unconditional warmth, love, and caring. It needs to provide the realization that other people are recognized as deserving to be nurtured, reinforced, rewarded, and bonded to.</p>\n",
          });
          console.log(`${doc.id} => ${doc.data()}`);
        });

        setTimeout(() => cb(feature), timeout || TIMEOUT);
      });
  },
};
