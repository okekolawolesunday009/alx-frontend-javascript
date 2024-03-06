export default function loadBalancer(chinaDownload, USDownload) {
	Promise.all(chinaDownload, USDownload).then((values) => {
		return (console.log(values));
	});

}
