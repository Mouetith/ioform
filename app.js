function myTest() {
                var f, l, c, s, g,b,result;
                f = document.testf.fname.value;
                l = document.testf.lname.value;
                sx = document.testf.sex.value;
                c = document.testf.class.value;
                s = document.testf.shift.value;
                


                result = "ឈ្មោះ=>" + l +" "+f+ "\n";
                result += "ភេទ=>" + sx + "\n";
                result += "ថ្នាក់=>" + c + "\n";
                result += "វេន=>" + s + "\n";

                document.testf.dis.value = result;
}
