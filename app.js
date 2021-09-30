function myTest() { 
                var f, l, c, s, e, result;
                f = document.testf.fname.value;
                l = document.testf.lname.value;
                sx = document.testf.sex.value;
                c = document.testf.class.value;
                s = document.testf.shift.value;

                result = "នាមខ្លួន=>" + f + "\n";
                result += "នាមត្រកូល=>" + l + "\n";
                result += "ភេទ=>" + sx + "\n";
                result += "ថ្នាក់=>" + c + "\n";
                result += "វេន=>" + s + "\n";

                document.testf.dis.value = result;
}
